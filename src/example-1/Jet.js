import React from 'react';
import './jet.scss';
import anime from 'animejs'



const styles = {
    rocket: {
        position: 'absolute',
        top: '20%',
        width: 80,
        left: 'calc(50% - 60px)'
    },
    rocketWrap: {
        width: 80,
    },
    body: {
        backgroundColor: '#dadada',
        height: 180,
        left: 'calc(50%-50px)',
        borderTopRightRadius: '100%',
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        borderTop: '5px solid #eeeeee'
    }
}

const animStates = {
    default: {
        duration: 2000,
        bottom: 100 + Math.random() * 400,
        scale: 1,
    },
    flyFast: {
        keyframes: [
            {
                bottom: 100 + Math.random() * 400,
                scale: 1,
            },
            {
                translateY: [100, -500, 400, 0],
                scale: 1
            }
        ],
        duration: 5000,
    },
    shake: {
        keyframes: [

        ]
    }
}

export default class Rocket extends React.Component {

    state = {
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

        anime({
            targets: this.rocket,
            duration: 1000,
            bottom: 150 + Math.random() * 100,
            easing: 'easeInOutCubic',
            scale: 2,
            complete: () => {
                anime({
                    targets: this.rocket,
                    keyframes: [
                        {
                            translateY: 50,
                            scale: 1,
                            duration: 1000,
                        },
                        {
                            duration: 1000,
                            translateY: -300,
                            scale: 1
                        },
                        {
                            duration: 2000,
                            translateY: 0,
                            scale: 1
                        },
                        {
                            duration: 1000,
                            translateX: 100,
                            scale: 1
                        }
                    ],
                    easing: 'easeInOutCubic',
                    duration: 500,
                    complete: () => {
                        this.x = 100
                        this.mouseGestResponse()
                    }
                }
                )
            }
        })

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
            <div class="rocket" ref={ref => this.rocket = ref} 
            >
                <div class="rocket-body" >
                    <div class="body" ></div>
                    <div class="fin fin-left"></div>
                    <div class="fin fin-right"></div>
                    <div class="window"></div>
                </div>
                <div class="exhaust-flame"></div>
            </div>
        )
    }
}