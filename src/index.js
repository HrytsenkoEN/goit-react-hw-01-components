import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



const jsx1 = <span>Hello</span>
const jsx2 = <span>World</span>
const jsxElement = <div>{jsx1}{ jsx2}</div>
console.log(jsxElement);