import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDidUpdateEffect} from "./hooksLearnings/useDidUpdateEffect/useDidUpdateEffect";
import {useDeviceDetect} from "./customHooks";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



function App() {

  useDidUpdateEffect('only after deps update', [])

  return (
    <div className="App">
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </div>
  );
}

export default App;
