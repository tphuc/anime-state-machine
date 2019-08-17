import anime from 'animejs';

const noOffset = '+=0';
const noScale = '*=1';

class AnimStateMachine{
    constructor(target){
        this.target = target
        this.animGraph = []
        this.currentPlayingAnim = ''
    }

    addAnim = (name, animeJsObject) => {
        this.animGraph.push(new AnimNode(name, animeJsObject))
        if(!this.currentPlayingAnim)
            this.currentPlayingAnim = this.animGraph[0].name()
    }

    addTransition = (fromAnim, toAnim, condition) => {
        for(var i=0; i < this.animGraph.length; i++){
            if(this.animGraph[i].name() === fromAnim) {
                this.animGraph[i].addTransition(toAnim, condition)
            }
        }
    }

    getAnimToPlay = () => {
        return this._getAnimNodeByName(this.currentPlayingAnim)
    }

    start = () => {
        this._getAnimToPlay().animate()
    }

    _getAnimNodeByName = (name) => {
        for(var i=0; i < this.animGraph.length; i++){
            if(this.animGraph[i].name() === name) return this.animGraph[i] 
        }
    }
}

class AnimTransition{
    constructor(from, to, condition){
        this.fromAnim = from,
        this.toAnim = to
        this.condition = condition
    }

    conditionEvaluate = () => {
        return this.condition() ? this.toAnim : this.fromAnim
    }
}

class AnimNode{
    constructor(name, animeJsObject){
        this.name = name
        this.animation = animeJsObject
        this.transitions = []
    }

    name = () => this.name

    addTransition = (toAnim, condition) => { this.transitions.push(new AnimTransition(this.name, toAnim, condition)) }

    getNextAnim = () => {
        for(var i = 0; i < this.transitions.length; i++){
            var animName = this.transitions[i].conditionEvaluate()
            if(this.transitions[i].conditionEvaluate() !== this.name) return animName
        }
        return this.name
    }
    
    animate = (target) => {
        anime({
            ...this.animeJsObject,
            targets: target
        })
    }
}