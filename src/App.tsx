import React from 'react';
import {DynamicNameWrapper, UserInfo} from './components';
import './App.scss';



function App() {

  return (
    <div className="App">
        <DynamicNameWrapper/>
        <UserInfo name={'random user'}/>
    </div>
  );
}

export default App;
