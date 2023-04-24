import React, {useRef, useState} from 'react';

import './App.scss';
import {ComponentsObject} from "./components/JSXDynamicComponentName/DinamicComponentName";
import {ComponentDynamicName} from "./components/JSXDynamicComponentName/ComponentDynamicName";

function App() {

  return (
    <div className="App">
        <ComponentDynamicName/>
    </div>
  );
}

export default App;
