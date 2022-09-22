import React,{useState, useEffect} from 'react'

import styled from 'styled-components';

import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';

import { Item } from '../components/Item'
import { Search } from '../components/Search'
import { device } from '../constants/devices-sizes';



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

    <StyledProductListPage>

      <div className='first-row-main-screen'>

        <div><Search /></div>                

      </div>

      <div className='second-row-main-screen'>

        <div className='item-list'>
          
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

        </div>
          
      </div>
                
    </StyledProductListPage>

  )
  
}

const StyledProductListPage = styled.div`
  display: flex;
  flex-direction: column;

  & > .first-row-main-screen {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 1rem 3rem 3rem;
  }

  & > .second-row-main-screen{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > .item-list{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      grid-column-gap: 2rem;

      @media ${device.mobileL} { 
          grid-template-columns: repeat(2, 1fr);
      }
  
      @media ${device.laptop} {
        grid-template-columns: repeat(4, 1fr);
      }

      & > .item{
        width: 100%;

        & > .img{
          width: 50%;
        }          
      }

    }
  
  }

`;
