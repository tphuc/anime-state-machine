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


## BASIC USE:

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
- Components breakdown:
  ### ASM 
    - ASM is a "container" that contains Animations and Transitions. 

    Constructor:
    ``` js 
    new ASM(object) 
    ```
    Example:
    ``` js
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
    
  
  ### ASM.Anim

    ```js
      addAnim(animationName, animejsProperties)
    ```
    - example: 
    ```js
      addAnim('flipOver', {
        duration: 3000,
        rotateX: 360,
      })
    ```
    - for more info about **animejsProperties** checkout https://animejs.com/documentation/

  ### ASM.Transition
      ```js
        addTransition(
              fromAnimation, 
              toAnimation, 
              conditionCallBack, 
              onEnterCallBack, 
              onExitCallBack)
      ```

      - example:

      ```js
        addTransition( 
          'flyright',
          'flyleft',
          () => { window.scrollY > 600 },
          () => { console.log('enter flyleft')},
          () => { console.log('exit flyleft')}
        )
      ```

  ### Visual Profiling Tool
  - To turn on visual profiling
    ```js
      .enableWindowProfiling()
    ```

## Screenshots
![]
 

