import {  useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import styled from 'styled-components';

import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { ProductService } from '../../domain/services/productService/productService';


import { BreadCrumbs } from '../components/BreadCrumbs';
import { Header } from '../components/Header';
import useAddProductToCart from '../hooks/useAddProductToCart';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { ProductListPage } from '../pages/ProductListPage';



export const MainLayout = () => { 

  const { cartValue, addProductToCart } = useAddProductToCart();

  const [items, setItems] = useState([]);
  const [item, setItem] = useState();

  const itemsFromStore = () => {

    if(PersistenceService.get('items') === null){

      return true;
      
    }  

  };
  
  useEffect(() => {

    if(itemsFromStore()){

      ProductService.getDataFromApi().then((response) => {
    
        setItems(response.data);
        
        PersistenceService.persist('items', response.data);
  
        if(PersistenceService.get('cartCount') === null){
  
          PersistenceService.persist('cartCount', 0);
  
        } 
  
        itemsFromStore();
  
      });

    }

    const store = PersistenceService.get('items'); 

    setItems(store);  
      
  },[]);
  

  return (

    <StyledMainLayout>

      <BrowserRouter >
        <Header cartValue={ cartValue }/>
        <BreadCrumbs item={ item }/>
        <Routes>
          <Route path='/' element={ <ProductListPage items={ items } setItems={ setItems }/> } />
          <Route 
            path='/product/:id' 
            element={ 
              <ProductDetailPage cartValue={ cartValue } addProductToCart={ addProductToCart } item={ item } setItem={ setItem } /> 
            } />
        </Routes>
      </BrowserRouter >

    </StyledMainLayout>

  );
  
};

const StyledMainLayout = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;
