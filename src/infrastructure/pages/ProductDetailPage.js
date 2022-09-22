/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";

import styled from 'styled-components';

import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { ProductService } from '../../domain/services/productService/productService';

import { Actions } from '../components/Actions'
import { Button } from '../components/Button'
import { Description } from '../components/Description'
import { Image } from '../components/Image'



export const ProductDetailPage = ({addProductToCart}) => {

  const { id } = useParams()  

  const [item, setItem] = useState();  
  const [userOptions, setUserOptions] = useState({ 
    id, 
    colorCode: null, 
    storageCode: null 
  });

  const getItem = () => {

    ProductService.getItemFromApi(id).then((response) =>{

      setItem(response.data)       
      PersistenceService.persist('item', response.data) 
     
    }) 

  }

  useEffect(()=>{

    getItem(); 

  },[]) 

  const onSubmit = async (e) => {

    e.preventDefault();
    await addProductToCart({ ...userOptions, id });

  };

  const onChangeColor = (e) => {

    const colorCode = parseInt(e.target.value);
    setUserOptions({ ...userOptions, colorCode });

  };

  const onChangeStorage = (e) => {

    const storageCode = parseInt(e.target.value);
    setUserOptions({ ...userOptions, storageCode });

  };

  return (

    <StyledProductDetailPage>

      {
        item && (
          
          <>            

            <div className='first-row-product-detail'>

              <h3>{item.brand} {item.model}</h3>

              <Link to={'/'}>
                <Button text='Back to list'></Button>
              </Link>

            </div>
            
            <div className='second-row-product-detail'>

              <Image className="img" imgUrl={item.imgUrl} altText={`${item.brand}-${item.model}`}  />

              <div className='third-row-product-detail'>

                <Description product={item} />

                <Actions
                  item={item}
                  onSubmit={onSubmit}
                  onChangeColor={onChangeColor}
                  onChangeStorage={onChangeStorage}
                  userOptions={userOptions} 
                  setUserOptions={setUserOptions}
                />

              </div>

            </div>

          </>

        )

      }

    </StyledProductDetailPage>
  )

}

const StyledProductDetailPage = styled.div`
  display: flex;
  flex-direction: column;

  & > .first-row-product-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 3rem 3rem;
  }

  & > .second-row-product-detail {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem 3rem 3rem;

    .img {
      margin: 1rem;
    }
    
    & > .third-row-product-detail {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-top: 2rem ;
      margin-left: 10px ;
    }
  }
`;
