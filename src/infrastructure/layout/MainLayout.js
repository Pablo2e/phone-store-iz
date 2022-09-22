/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import styled from 'styled-components';

import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { ProductService } from '../../domain/services/productService/productService';

import useAddProductToCart from '../hooks/useAddProductToCart';

import { BreadCrumbs } from '../components/BreadCrumbs';
import { Header } from '../components/Header'
import { ProductListPage } from '../pages/ProductListPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';



export const MainLayout = () => {

  const { cartValue, addProductToCart } = useAddProductToCart()

    const [items, setItems] = useState([]);
  
    useEffect(() => {
  
      ProductService.getDataFromApi().then((response) => {
  
        setItems(response.data)
        PersistenceService.persist('items', response.data)

      })
      
    },[])

  return (

    <StyledMainLayout>

        <BrowserRouter >
          <Header cartValue={cartValue}/>
          <BreadCrumbs />
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailPage cartValue={cartValue} addProductToCart={addProductToCart}/>} />
          </Routes>
        </BrowserRouter >

    </StyledMainLayout>

  )
  
}

const StyledMainLayout = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;
