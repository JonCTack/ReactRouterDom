import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Stock from './pages/Stock';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Dashboard/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"stocks/:symbol",
        element: <Stock/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
