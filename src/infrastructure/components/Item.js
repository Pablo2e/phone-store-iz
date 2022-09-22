import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Image } from './Image'



export const Item = ({ id, imgUrl, brand, model, price }) => {

  return (

    <StyledItem>

      <Link 
        to={`/product/${id}`}        
        style={{ textDecoration: 'none', color: 'black' }}
        > 

        <Items>     

          <div className="container">

            <div className="card">

              <div className="card-img">

                <Image
                  className="img-item"
                  imgUrl={imgUrl}
                  altText={`${brand}-${model}`}
                  lazyLoading={true}
                />

              </div>

              <div className="card-content">

                <h2 className="big-title">{brand}</h2>
                <h3 className="medium-title">{model}</h3>
                <h4>{price ? <b>{price} €</b> : <small>Price not available</small>}</h4>                  

              </div>

            </div>
          
          </div>

        </Items>

      </Link>

    </StyledItem>

  )
}

const StyledItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    `;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px ;   

    .card {
    width: 90%;
    max-width: 450px;
    display: flex;
    flex-direction: row; 
    background-color: #FFF;
    padding: 0 2rem 1.5rem 2rem;
    border-radius: 10px;
    transition: box-shadow .3s linear;
    }
    .card:hover {
    box-shadow: 0 0 35px rgba(0, 0, 0, .3);
    }

    .card .card-img {
    width: 50%;
    border-radius: 10px;
    overflow: hidden;
    transform: translateY(-15%);
    transition: box-shadow .3s linear;
    }
    .card:hover .card-img {
    box-shadow: none;
    }
    .card .card-img img {
    width: 100%;
    display: block;
    }

    .card .card-content {
    width: 50%;
    text-align: left;
    margin-left: 20px;
    }
    .card .card-content .big-title {
    color: #333;
    font-size: 1.3rem;
    }
    .card .card-content .medium-title {
    color: #999;
    font-size: .85rem;
    margin-top: .3rem;
    }
`;
