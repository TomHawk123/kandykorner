import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import KandyKorner from "./components/KandyKorner.js"
import reportWebVitals from './reportWebVitals';
import { LocationList } from './components/locations/LocationList';
import { ProductList } from './components/products/ProductList';

ReactDOM.render(
  <React.StrictMode>
    {/* <KandyKorner /> */}
    <LocationList />
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
