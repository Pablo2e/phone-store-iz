/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { AddToCartButton } from './AddToCartButton'

export const Actions = ({item, onSubmit, onChangeColor, onChangeStorage, options, setUserOptions}) => {
  
  useEffect(()=>{
    setUserOptions({
      id: item.id,
      colorCode: document.getElementById('color').value,
      storageCode: document.getElementById('storage').value
    })

  },[setUserOptions]) 

  const colors = item?.options.colors
  const storages = item?.options.storages 
  console.log(colors)
  const singleColor = colors.length <=1
  const singleStorage = storages.length <=1
  
  return (

    <>

      <form onSubmit={onSubmit}>

      {
        singleColor 
        ?         
          <select onChange={onChangeColor} defaultValue={item.options.colors[0].code} id='color'>
  
            {            
              colors && colors.map(({ name, code }) => (
                <option key={`${item.id}-${code}`} value={code}>
                  {name}
                </option>
              )) 
            }
  
          </select>
        :
          <select onChange={onChangeColor} defaultValue={item.options.colors[0].code} id='color'>

          <option key={`${item.id}-colors`} value={item.options.colors[0].code} disabled>
            Colors
          </option>

          {            
            colors && colors.map(({ name, code }) => (
              <option key={`${item.id}-${code}`} value={code}>
                {name}
              </option>
            )) 
          }

        </select>
      }

      {
        singleStorage
        ?
          <select onChange={onChangeStorage} defaultValue={item.options.storages[0].code} id='storage'>

          {
            storages && storages.map(({ name, code }) => (
              <option key={`${item.id}-${code}`} value={code}>
                {name}
              </option>
            ))
          }

          </select>
        :
          <select onChange={onChangeStorage} defaultValue={item.options.storages[0].code} id='storage'>

          <option key={`${item.id}-storages`} value={item.options.storages[0].code} disabled>
            Storages
          </option>

          {
            storages && storages.map(({ name, code }) => (
              <option key={`${item.id}-${code}`} value={code}>
                {name}
              </option>
            ))
          }

          </select>
      }

        <AddToCartButton userOptions={options} text="Add to cart" />

      </form>

    </>

  );
}
