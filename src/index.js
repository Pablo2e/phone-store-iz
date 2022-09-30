import ReactDOM from 'react-dom/client';
import './index.css';
import { MainLayout } from './infrastructure/layout/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainLayout />
);
