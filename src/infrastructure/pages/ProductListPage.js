import React,{useState, useEffect} from 'react'
import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { Item } from '../components/Item'

export const ProductListPage = () => {

  const [items, setItems] = useState([]);
  
  useEffect(() => {

    getItemsFromStore();
    
  },[])
  
  const getItemsFromStore = async() => {

    const store = await PersistenceService.get('items') 
    setItems(store)
    
  }

  return (
    <>
      <h1>ProductListPage</h1>
      {
        items.map(({ id, imgUrl, brand, model, price }) => {            
          return (
            <Item 
              key={id}
              id={id}
              imgUrl={imgUrl}
              brand={brand}
              model={model}
              price={price}
            />                            
          )
        })
      }
    </>
  )
}
