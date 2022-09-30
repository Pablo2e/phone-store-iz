/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styled from 'styled-components';

import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { ProductService } from '../../domain/services/productService/productService';

import { Actions } from '../components/Actions';
import { Button } from '../components/Button';
import { Description } from '../components/Description';
import { Image } from '../components/Image';

import { device } from '../constants/devices-sizes';



export const ProductDetailPage = ({ addProductToCart, item, setItem }) => {

  const { id } = useParams();  

  const deviceFromStore = PersistenceService.get('items').filter(phone => phone.id === id);
     
  const [userOptions, setUserOptions] = useState({ 
    id, 
    colorCode: null, 
    storageCode: null 
  });

  const getItem = async() => {

    if(PersistenceService.get(deviceFromStore[0].model) !== null){

      setItem(PersistenceService.get(deviceFromStore[0].model));

    } else {
      
      await ProductService.getItemFromApi(id).then((response) =>{
  
        setItem(response.data);      
        PersistenceService.persist(response.data.model, response.data); 
        
      }); 
      
    }    

  };

  useEffect(()=>{

    getItem(); 

  },[]); 

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

              <h3>{ item.brand } { item.model }</h3>

              <Link to={ '/' }>
                <Button text='Back to list'></Button>
              </Link>

            </div>
            
            <div className='second-row-product-detail'>

              <div className='column'>

                <Image className='img' imgUrl={ item.imgUrl } altText={ `${item.brand}-${item.model}` }  />

              </div>

              <div className='third-row-product-detail column'>

                <Description product={ item } />

                <Actions
                  item={ item }
                  onSubmit={ onSubmit }
                  onChangeColor={ onChangeColor }
                  onChangeStorage={ onChangeStorage }
                  userOptions={ userOptions } 
                  setUserOptions={ setUserOptions }
                />

              </div>

            </div>

          </>

        )

      }

    </StyledProductDetailPage>
  );

};

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 3rem 3rem;

    @media ${device.tablet} { 
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .column {
      flex: 50%;
      display: grid;
      place-items: center;
    }

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
