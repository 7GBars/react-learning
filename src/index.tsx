import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';


import {ThemeContextProviderWrapper} from "./examples/contextWrapper/ThemeContextProviderWrapper";

import {App} from './App';
import Root from "./routes/root";
import ErrorPage from "./pages/errorPage";
import Contact from "./routes/contacts/contacts";

import './index.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
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
