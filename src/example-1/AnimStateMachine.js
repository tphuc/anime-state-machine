import anime from 'animejs';
import ReactDOM from 'react-dom';
import React from 'react';
import AnimBlueprint from '../example-1/AnimBlueprint'




export const creatAnimation = (animName, animProps, onEnter, onExit) => {
    return new AnimNode(animName, animProps, onEnter, onExit)
}


export class AnimStateMachine{
    constructor(target){
        this.target = target
        this.animGraph = []
        this.transitGraph = []
        this.currentPlayingAnim = ''
    }

    addAnim = (name, animeJsObject, onEnter, onExit) => {
        this.animGraph.push(new AnimNode(name, animeJsObject, onEnter, onExit))
        if (!this.currentPlayingAnim)
            this.currentPlayingAnim = name
    }

    addTransition = (fromAnim, toAnim, condition) => {
        for (var i = 0; i < this.animGraph.length; i++) {
            if (this.animGraph[i].getName() === fromAnim) {
                var transit = this.animGraph[i].addTransition(toAnim, condition)
                if(this._checkTransitionReverse(fromAnim, toAnim)) transit.paired = true
                this.transitGraph.push(transit)
            }
        }
    }

    getCurrentPlayingAnim = () => {
        //return AnimNode Instance
        return this.getAnimNodeByName(this.currentPlayingAnim)
    }

    getAnimNodeByName = (name) => {
        //return AnimNode.name
        for (var i = 0; i < this.animGraph.length; i++) {
            if (this.animGraph[i].getName() === name) return this.animGraph[i]
        }
    }

    start = () => {
        this.playAnim = this.getCurrentPlayingAnim().getAnimeInstance(this.target)
        this.loop()
    }

    loop = (t) => {
        var animToPlay = this.getAnimNodeByName(this.getCurrentPlayingAnim().getNextAnim())
        if(animToPlay.getName() !== this.currentPlayingAnim){
            this.playAnim = animToPlay.getAnimeInstance(this.target)
            this.currentPlayingAnim = animToPlay.getName()
            
        }
        if(this.AnimBlueprint) this.AnimBlueprint.setActiveNode(this.getAnimNodeByName(this.currentPlayingAnim))

        
        this.playAnim.tick(t)
        requestAnimationFrame(this.loop)
    }

    enableProfiling = () => {
        var blueprint = document.createElement('div')
        blueprint.style.minWidth = '500px'
        blueprint.style.minHeight = '500px'
        blueprint.setAttribute('id', 'blueprint-node-anim')
        document.body.append(blueprint)
        ReactDOM.render(<AnimBlueprint ref={ref => this.AnimBlueprint = ref} animNodes={this.animGraph} transitions={this.transitGraph}> </AnimBlueprint>, document.getElementById('blueprint-node-anim'))
    }

    _checkTransitionReverse = (fromAnim, toAnim) => {
        for(var i = 0; i < this.transitGraph.length; i++){
            if(this.transitGraph[i].id === toAnim + ' ' + fromAnim){
                return true
            }
        }
        return false

    }

}

export class AnimTransition {

    constructor(from, to, condition) {
        this.fromAnim = from
        this.toAnim = to
        this.condition = condition
    }

    conditionEvaluate = () => {
        return this.condition() ? this.toAnim : this.fromAnim
    }
}


export class AnimNode {

    constructor(name, animeJsProps, onEnter, onExit) {
        this.name = name
        this.animeJsProps = animeJsProps
        this.transitions = []
        this.onEnter = onEnter
        this.onExit = onExit
    }

    getName = () => this.name

    getData = () => this.animeJsProps

    addTransition = (toAnim, condition) => { 
         var transition = new AnimTransition(this.name, toAnim, condition);
         transition.id = this.name + ' ' + toAnim
         this.transitions.push(transition); 
         return transition 
    }
    
    getNextAnim = () => {
        for (var i = 0; i < this.transitions.length; i++) {
            var animName = this.transitions[i].conditionEvaluate()
            if (this.transitions[i].conditionEvaluate() !== this.name) return animName
        }
        return this.name
    }

    getAnimeInstance = (target) => {
        return anime({
            targets: target,
            begin: this.onEnter,
            ...this.animeJsProps,
            autoplay: false,
            complete: this.onExit,
        })
    }    


}