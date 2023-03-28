import React, {useRef, useState} from 'react';

import './App.scss';
import {ComponentsObject} from "./components/JSXDynamicComponentName/DinamicComponentName";

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [componentName, setComponentName] = useState('component1');

    const getComponentName = (name: string = 'input') => {
        switch(name) {
            case 'input': return 'input';
            case 'text': return 'text';
            case 'button': return 'button';
            default:  return 'default';
        }
    };

  const ComponentName = ComponentsObject[getComponentName(componentName)];
  return (
    <div className="App">
        <ComponentName />
        <br/>

        <br/>
        <input type="text" name="name"  ref={inputRef}/>
        <button onClick={(e) => {

            setComponentName(inputRef.current!.value)
        }}>Change component</button>
    </div>
  );
}

export default App;
