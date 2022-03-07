import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from './components/KandyKorner';
// import { LocationList } from './components/locations/LocationList';
 // Gives access to built-in react component
import { BrowserRouter } from 'react-router-dom'
// import { ProductList } from './components/products/ProductList';


// BroswerRouter opening and closing elements enables routing for anything called
// within opening and closing tags. 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <KandyKorner />
      {/* <LocationList />
      <ProductList /> */}
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
