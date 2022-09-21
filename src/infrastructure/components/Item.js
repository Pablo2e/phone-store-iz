import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from './Image'

export const Item = ({ id, imgUrl, brand, model, price }) => {
  return (
    <>
      <Link
        to={`/product/${id}`}
      >
        <Image
          className="img-item"
          imgUrl={imgUrl}
          altText={`${brand}-${model}`}
          lazyLoading={true}
        />
        <div className="product-info">
          <p>
            <b>{brand}</b> {model}
          </p>
          <span className="price-text">
            {price ? <b>{price}€</b> : <small>Price not available</small>}
          </span>
        </div>
      </Link>
    </>
  )
}
