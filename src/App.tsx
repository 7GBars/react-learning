import React, {useState} from 'react';
import {DynamicNameWrapper, UserInfo} from './components';
import './App.scss';
import {ComponentUseCallback} from "./hooksLearnings/useCallback&useMemo/UserInfo";



function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
        <button onClick={(e) => setCount(c => ++c)}> plus </button>
        <b>Count is: {count}</b>
        <DynamicNameWrapper/>
        {/*<UserInfo name={'random user'}/>*/}
        <ComponentUseCallback name={'usecallback'}/>
    </div>
  );
}

export default App;
