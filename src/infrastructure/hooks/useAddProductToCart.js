import {useState, useEffect} from 'react';
import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { ProductService } from '../../domain/services/productService/productService';

const useAddProductToCart = () => {

  const [cartValue, setCartValue] = useState(0);

  const addProductToCart = async ({ id, colorCode, storageCode }) => {

    const { data: cart } = await ProductService.addProductToCart({
      id,
      colorCode,
      storageCode,
    });

    if (cart) {

      setCartValue((count) => count + 1);

    }

  };

  useEffect(() => {

    const storedCartCount = PersistenceService.get('cart');

    if (storedCartCount) {
      setCartValue(storedCartCount);
    }
    
  }, []);

  return { cartValue, addProductToCart };

};

export default useAddProductToCart;