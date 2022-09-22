/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components';
import { ProductService } from '../../domain/services/productService/productService';
import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
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
        <Outlet />

    </StyledMainLayout>
    
  )
  
}

const StyledMainLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
`;
