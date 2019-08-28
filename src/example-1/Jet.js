import React from 'react';
import './jet.scss';
import anime from 'animejs'
import * as ASM from './AnimStateMachine'


export default class Rocket extends React.Component {

    state = {
        clicked: false,
        animation: {
            transtateX: 100,
        }
    }

    constructor(props) {
        super(props);
        this.lFollowX = 0;
        this.lFollowY = 0;
        this.x = 0;
        this.y = 0;
        this.friction = 0.01;
        this.animating = false

        window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentDidMount() {

        //creating Animation State Machine
        this.AnimStateMachine = new ASM.AnimStateMachine(this.rocket)

        //Adding animations
        this.AnimStateMachine.addAnim('flyright', {
            translateX: 300,
            duration: 1000
        })

        this.AnimStateMachine.addAnim('flyleft', {
            translateX: -300,
            duration: 5000
        })
        
        //adding transition
        this.AnimStateMachine.addTransition('flyright', 'flyleft', () => window.scrollY > 500)
        this.AnimStateMachine.addTransition('flyleft', 'flyright', () => window.scrollY < 10)

        //start
        this.AnimStateMachine.enableProfiling()
        this.AnimStateMachine.start()

    }

    mouseGestResponse = () => {
        this.x += (this.lFollowX - this.x) * this.friction 
        this.y += (this.lFollowY - this.y) * this.friction;
        var a = `translate(${this.x}px, ${this.y-0}px) scale(1)`
        this.rocket.style.transform = a;
        requestAnimationFrame(this.mouseGestResponse)
    }

    handleMouseMove = (e) => {
       this.lFollowX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX)) / 5;
       this.lFollowY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY)) / 5;

    }


    render() {
        return (
            <div style={{width:'100%', height:window.innerHeight*2}}>
            <div class="rocket" ref={ref => this.rocket = ref} style={{position:'fixed'}}
                onClick={() => this.setState({clicked: true})} 
            >
                <div class="rocket-body" >
                    <div class="body" ></div>
                    <div class="fin fin-left"></div>
                    <div class="fin fin-right"></div>
                    <div class="window"></div>
                </div>
                <div class="exhaust-flame"></div>
            </div>
            </div>
        )
    }
}