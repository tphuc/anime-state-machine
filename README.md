# ANIM STATE MACHINE

Easy animate things with anime-state-machine  (powered by Animejs)

## Installation:

```
    yarn add anime-state-machine
```
or 

```
    npm i anime-sate-machine
```


## How to use:

``` javascript
import React from 'react';
import AnimStateMachine from 'anime-state-machine'

const styles = {
    width: 100, 
    height: 100, 
    position:'absolute', 
    background:'#aaaaaa' 
}

export default class Example extends React.Component {

    componentDidMount() {

        //creating Animation State Machine
        this.AnimStateMachine = new AnimStateMachine(this.object);

        //Adding animations
        this.AnimStateMachine.addAnim('flyright', {
            translateX: 300,
            duration: 1000,
        });

        this.AnimStateMachine.addAnim('flyleft', {
            translateX: -300,
            duration: 5000
        });
        
        //adding transition
        this.AnimStateMachine.addTransition('flyright', 'flyleft', () => window.scrollY > 500);
        this.AnimStateMachine.addTransition('flyleft', 'flyright', () => window.scrollY < 10);

        //start
        this.AnimStateMachine.enableWindowProfiling();
        this.AnimStateMachine.start();

    }


    render() {
        return (
            <div 
                ref = {ref => this.object = ref} 
                style = {styles}
            />
        )
    }
}  
```