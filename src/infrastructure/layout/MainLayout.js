import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router'
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
    <>
        <h1>MainLayout</h1>
        <Header />
        <Outlet />
    </>
  )
  
}
