/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable sort-keys */
import { useEffect } from 'react';

import styled from 'styled-components';

import { AddToCartButton } from './AddToCartButton';



export const Actions = ({ item, onSubmit, onChangeColor, onChangeStorage, userOptions, setUserOptions }) => {
  
  useEffect(()=>{
    setUserOptions({
      id: item.id,
      colorCode: document.getElementById('color').value,
      storageCode: document.getElementById('storage').value
    });

  },[setUserOptions]); 

  const colors = item?.options.colors;
  const storages = item?.options.storages; 
  const singleColor = colors.length <=1;
  const singleStorage = storages.length <=1;
  
  return (

    <StyledActions>

      <form onSubmit={ onSubmit }>

        {
          singleColor 
            ?         
            <select onChange={ onChangeColor } defaultValue={ item.options.colors[0].code } id='color'>
  
              {            
                colors && colors.map(({ name, code }) => (
                  <option key={ `${item.id}-${code}` } value={ code }>
                    { name }
                  </option>
                )) 
              }
  
            </select>
            :
            <select onChange={ onChangeColor } defaultValue={ item.options.colors[0].code } id='color'>

              <option key={ `${item.id}-colors` } value={ item.options.colors[0].code } disabled>
            Colors
              </option>

              {            
                colors && colors.map(({ name, code }) => (
                  <option key={ `${item.id}-${code}` } value={ code }>
                    { name }
                  </option>
                )) 
              }

            </select>
        }

        {
          singleStorage
            ?
            <select onChange={ onChangeStorage } defaultValue={ item.options.storages[0].code } id='storage'>

              {
                storages && storages.map(({ name, code }) => (
                  <option key={ `${item.id}-${code}` } value={ code }>
                    { name }
                  </option>
                ))
              }

            </select>
            :
            <select onChange={ onChangeStorage } defaultValue={ item.options.storages[0].code } id='storage'>

              <option key={ `${item.id}-storages` } value={ item.options.storages[0].code } disabled>
            Storages
              </option>

              {
                storages && storages.map(({ name, code }) => (
                  <option key={ `${item.id}-${code}` } value={ code }>
                    { name }
                  </option>
                ))
              }

            </select>
        }

        <AddToCartButton userOptions={ userOptions } text='Add to cart' />

      </form>

    </StyledActions>

  );
};

const StyledActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    flex-basis: 100%;
  }
  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }
  & > form > select {
    font-size: 1.2rem;
    display: block;
    width: 320px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 auto 1rem auto;
    padding: 0.5rem;
  }
`;
