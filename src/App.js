import React from 'react';
import Jet from '../src/example-1/jet';
import Profiling from './example-1/AnimBlueprint'


function App() {
  return (
    <div >
      <Jet></Jet>
      <div style={{ position:'absolute', height:'200%', top:0, lef:100, display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
        <p>- {0}</p>
        <p>- {400}</p>
        <p>- {800}</p>
        <p>- {1200}</p>
        <p>- {window.innerHeight*2}</p>
      </div>
    </div>
  );
}



export default App;
