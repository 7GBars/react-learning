import React from 'react';
import {Page} from "./examples/passingComponentAsProps/PassComponentAsProps";
import './App.scss';


export function App() {
  console.log('render app')
  return (
    <div className="App">
        <Page href={'https://ru.legacy.reactjs.org/docs/context.html#before-you-use-context'}/>
    </div>
  );
}


