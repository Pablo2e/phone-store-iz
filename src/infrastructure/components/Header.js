import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Header = ({cartValue}) => {

  return (

    <StyledHeader>

      <div className='logo'>

        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <h1>Phone Store</h1>
        </Link>

      </div>

      <div className="cart">

        <p>Cart</p>

        <div className="cart-value">{cartValue || 0}</div>

      </div>
      

    </StyledHeader>

  )

}

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem ;
  & > .logo {
    display: flex;
    flex-direction: row ;
    margin-left: 20px;
    color: black;
  }
  & > .cart {
    display: flex;
    flex-wrap: wrap;
    gap: 0.1em;
    text-transform: uppercase;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;

    & > .cart-value {
      display: flex;
      margin-right: 1rem;
      justify-content: center;
      align-items: center;
      height: 1.5rem;
      width: 1.5rem;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;
