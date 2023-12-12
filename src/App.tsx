import React from 'react';
import {Page} from "./examples/passingComponentAsProps/PassComponentAsProps";
import './App.scss';
import {Portal} from "./examples/ReactPortal/PortalTest";


export function App() {
  console.log('render app')
  return (
    <div className="App">
        <Page href={'https://ru.legacy.reactjs.org/docs/context.html#before-you-use-context'}/>
        <Portal name={'test'}/>
    </div>
  );
}


