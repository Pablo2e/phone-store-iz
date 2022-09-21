import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import { ProductListPage } from './infrastructure/pages/ProductListPage';
import { ProductDetailPage } from './infrastructure/pages/ProductDetailPage';
import { ProductService } from './domain/services/productService/productService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage addProductToCart={ProductService.addProductToCart}/>} />
        </Route>
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);
