import React from 'react'

import styled from 'styled-components';

import { device } from '../constants/devices-sizes';



export const Description = ({ product }) => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    battery,
    primaryCamera,
    secondaryCmera,
    displayResolution,
    dimentions,
    weight,
  } = { ...product };

  return (

    <StyledDescription>

      <div className="cards-container">

        <div className="card">
          <h4>Brand</h4>
          <p>{brand}</p>
        </div>
  
        <div className="card">
          <h4>Model</h4>
          <p>{model}</p>
        </div>
  
        <div className="card">
          <h4>Price €</h4>
          <p>{price}</p>
        </div>
  
        <div className="card">
          <h4>CPU</h4>
          <p>{cpu}</p>
        </div>
  
        <div className="card">
          <h4>Ram</h4>
          <p>{ram}</p>
        </div>
  
        <div className="card">
          <h4>Operative Sistem</h4>
          <p>{os}</p>
        </div>
  
        <div className="card">
          <h4>Display Resolution</h4>
          <p>{displayResolution}</p>
        </div>

        <div className="card">
          <h4>Battery</h4>
          <p>{battery}</p>
        </div>
        
        <div className="card">
          <h4>Primary Camera</h4>
          <p>{primaryCamera}</p>
        </div>    

        {
          secondaryCmera && (
            <div className="card">
              <h4>Secondary Camera</h4>
              <p>{secondaryCmera}</p>
            </div>
          )
        }           
        
        <div className="card">
          <h4>Dimentions</h4>
          <p>{dimentions}</p>
        </div>

        <div className="card">
          <h4>Weight</h4>
          <p>{weight}gr</p>
        </div>

      </div>

    </StyledDescription>

  )

}

const StyledDescription = styled.div`
  
  & > .cards-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap ;
    max-width: 1000px;
    justify-content: center;

    & > .card{
      width: 100%;
      align-self: auto;
      margin: 10px;
  
      @media ${device.mobileL} { 
        width: 46%;
        align-self: auto;
      }
  
      @media ${device.laptop} {
        width: 22%;
      }
    }
  }

  .card {
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(22,22,22, 0.1);
  width: 100%;
  max-width: 130px;
  margin: 0 auto 1rem;
  text-align: center;
  padding: 0.1rem 0.2rem 0.2rem;
  }
  .card:hover {
    box-shadow: 0 0 35px rgba(0, 0, 0, .3);
    }
  
  h1 {
    font-weight: 400;
  }
`;
