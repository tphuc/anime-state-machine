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


## GET STARTED:

``` javascript
import React from 'react';
import ASM from 'anime-state-machine'

const styles = {
  obj: {
    width: 100,
    height: 100,
    left: 500,
    position: 'fixed',
    background: '#aaaaaa'
  },
  space: {
    width: '100%',
    height: 4000,

  }
}

export default class Example extends React.Component {

  componentDidMount() {

    //creating Animation State Machine
    var AnimStateMachine = new ASM(this.object);

    //Adding animations
    AnimStateMachine.addAnim('flyright', {
      translateX: 300,
      duration: 1000,
    });

    AnimStateMachine.addAnim('flyleft', {
      translateX: -300,
      duration: 5000
    });

    //adding transition
    AnimStateMachine.addTransition('flyright', 'flyleft', () => window.scrollY > 500);
    AnimStateMachine.addTransition('flyleft', 'flyright', () => window.scrollY < 10);

    //start
    AnimStateMachine.enableWindowProfiling();
    AnimStateMachine.start();

  }


  render() {
    return (
      <div style={styles.space}>
        <div
          ref={ref => this.object = ref}
          style={styles.obj}
        />
      </div>
    )
  }
}  
```


## APIs 

  
------------------------
### ANIM STATE MACHINE (ASM)

- Method
  ``` js 
  new ASM(object) 
  ```
- Example:

  ```js
  function MyObject() {
    const myObjectRef = useRef();
  
    useEffect(() => {
      // can be innitialized by one of the method below
      var animeStateMachine = new ASM(myObjectRef)
      var animeStateMachine = new ASM('#myObjectId')
      var animeStateMachine = new ASM('.myObjectclass')
    });

    return (
      <div id='myObjectId' className='myObjectClass' ref={ref => myObjectRef = ref}> </div>
    );
  }
  ```


### ADD ANIMATIONS

  - Method:
  
    ```js
    addAnim(animationName,animejsProperties, onEnterCallBack, onExitCallBack)
    ```


  - Example: 
    ```js
    addAnim(
      'flipOver', 
      {
        duration: 3000,
        rotateX: 360,
      },
      () => { console.log('enter flipover')},
      () => { console.log('exit flipover')}
    )
    ```

  - for more info about **animejsProperties** checkout https://animejs.com/documentation/

-----------
### ADD TRANSITIONS
  - Method
    ```js
      addTransition(
          fromAnimation, 
          toAnimation, 
          condition,  
      )
    ```
  - Example:
    ```js
      addTransition( 
        'flyright',
        'flyleft',
        () => { window.scrollY > 600 },
      )
    ```

    ```js
      addTransition( 
        'flyright',
        'flyleft',
        (timeRatio) => {
          // timeRatio = currentAnimTime / totalAnimDuration
          return timeRatio > 0.8
        },
      )
    ```

    ```js
      // or
      addTransition( 
        'flyright',
        'flyleft',
        'auto' // equivalent to timeRatio === 1
      )
    ```
---------
### VISUAL PROFILING TOOL

  ```js
    enableWindowProfiling()
  ```

## Screenshots
  ![](https://github.com/tphuc/anime-state-machine/blob/master/docs/Screen%20Shot%202019-09-03%20at%201.51.30%20PM.png?raw=true)
 

