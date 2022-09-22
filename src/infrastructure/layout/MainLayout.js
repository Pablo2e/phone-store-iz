/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router'

import styled from 'styled-components';

import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { ProductService } from '../../domain/services/productService/productService';

import { BreadCrumbs } from '../components/BreadCrumbs';
import { Header } from '../components/Header'



export const MainLayout = () => {

    const [items, setItems] = useState([]);
  
    useEffect(() => {
  
      ProductService.getDataFromApi().then((response) => {
  
        setItems(response.data)
        PersistenceService.persist('items', response.data)

      })
      
    },[])

  return (

    <StyledMainLayout>

        <Header />
        <BreadCrumbs />
        <Outlet />

    </StyledMainLayout>

  )
  
}

const StyledMainLayout = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;
