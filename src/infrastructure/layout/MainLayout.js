import React from 'react'
import { Header } from '../components/Header'
import { ProductListPage } from '../pages/ProductListPage'
import { ProductDetailPage } from '../pages/ProductDetailPage'

export const MainLayout = () => {
  return (
    <div>
        <h1>MainLayout</h1>
        <Header />
        <ProductListPage />
        <ProductDetailPage />
    </div>
  )
}
