/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable sort-keys */

import styled from 'styled-components';

import { AddToCartButton } from './AddToCartButton';



export const Actions = ({ item, onSubmit, onChangeColor, onChangeStorage, options, userOptions }) => {  
 
  const { colors, storages } = options;

  const mapOption = (key) => {
    const optionMapped = key.map(({ name, code }) => (
      <option key={ `${item.id}-${code}` } value={ code }>
        { name }
      </option>
    ));
    return optionMapped;
  };
  
  return (

    <StyledActions>

      <form onSubmit={ onSubmit }>
                   
        <select onChange={ onChangeColor } defaultValue='index'>

          <option key={ `${item.id}-colors` } value='index' disabled>
            Colors
          </option>

          {            
            mapOption(colors)
          }

        </select>

        <select onChange={ onChangeStorage } defaultValue='index'>

          <option key={ `${item.id}-storages` } value='index' disabled>
            Storages
          </option>

          {
            mapOption(storages)
          }

        </select>

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
