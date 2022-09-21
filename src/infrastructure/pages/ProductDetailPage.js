import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { Button } from '../components/Button'
import { Image } from '../components/Image'
import { Description } from '../components/Description'
import { Actions } from '../components/Actions'

export const ProductDetailPage = () => {
  
  let {id} = useParams();

  const [item, setItem] = useState([]);
  
  useEffect(() => {

    getItemFromStore();
    
  },[])
  
  const getItemFromStore = async() => {

    const store = await PersistenceService.get('items') 
    const singleProduct = store.filter(item => item.id === id)
    setItem(singleProduct[0])
    
  }

  const { imgUrl, brand, model } = { ...item };

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <Button></Button>
      <Image imgUrl={imgUrl} altText={`${brand}-${model}`} />
      <Description product={item}/>
      <Actions />
    </div>
  )
}
