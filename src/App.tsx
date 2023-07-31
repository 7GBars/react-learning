import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDidUpdateEffect} from "./hooksLearnings/useDidUpdateEffect/useDidUpdateEffect";
import {useDeviceDetect} from "./customHooks";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import {MainPage} from "./pages/mainPage";



function App() {

  return (
    <div className="App">
      <BrowserView>
        <h1>This is rendered only in browser</h1>
        <MainPage/>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </div>
  );
}

export default App;
