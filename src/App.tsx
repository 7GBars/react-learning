import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDidUpdateEffect} from "./hooksLearnings/useDidUpdateEffect/useDidUpdateEffect";




function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useDidUpdateEffect('only after deps update', [count])

  return (
    <div className="App">
      <button onClick={() => setCount(p => ++p)}>Plus</button>
      <b>count 1 is: {count}</b>
      <b>count 2 is: {count2}</b>
      <button onClick={() => setCount2(p => ++p)}>Plus</button>
    </div>
  );
}

export default App;
