import React from 'react';
import './App.scss';

import { BrowserView, MobileView } from 'react-device-detect';
import {MainPage} from "./pages/mainPage";
import {ThemeContextProviderWrapper} from "./examples/contextWrapper/ThemeContextProviderWrapper";



export function App() {
  console.log('render app')
  return (
    <div className="App">
        <MainPage/>
    </div>
  );
}


