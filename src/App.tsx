import React, {useState} from 'react';

import './App.scss';
import {Component, ComponentCopy, ComponentsObject} from "./components/JSXDynamicComponentName/DinamicComponentName";

function App() {
    const [componentName, setComponentName] = useState('component1');
    const ComponentName = ComponentsObject[componentName == 'component1' ? 'component1' : 'component2'];
  return (
    <div className="App">
        <ComponentName name={'main7'}/>
        <input type="text" name="name"  value={componentName} onChange={(e) => setComponentName(e.currentTarget.value)}/>
        <button onClick={(e) => setComponentName(componentName)}>Change component</button>
    </div>
  );
}

export default App;
