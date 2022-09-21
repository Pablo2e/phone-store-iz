import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import { ProductListPage } from './infrastructure/pages/ProductListPage';
import { ProductDetailPage } from './infrastructure/pages/ProductDetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductListPage />} />
          <Route path="/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);
