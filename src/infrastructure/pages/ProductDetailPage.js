/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { Button } from '../components/Button'
import { Image } from '../components/Image'
import { Description } from '../components/Description'
import { Actions } from '../components/Actions'
import { ProductService } from '../../domain/services/productService/productService';

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
     
    }) 

  }

  React.useEffect(()=>{

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
    <div>
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

              <Image imgUrl={item.imgUrl} altText={`${item.brand}-${item.model}`}  />

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

    </div>
  )
}
