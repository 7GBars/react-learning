import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {App} from './App';
import Root from "./routes/root";
import {ThemeContextProviderWrapper} from "./examples/contextWrapper/ThemeContextProviderWrapper";
import reportWebVitals from './reportWebVitals';

import './index.css';
import ErrorPage from "./pages/errorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextProviderWrapper defaultTheme={"light"}>
    <RouterProvider router={router} />
  </ThemeContextProviderWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
