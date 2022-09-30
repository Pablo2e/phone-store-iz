import { useEffect, useState } from 'react';
import { PersistenceService } from '../../domain/services/persistenceService/persistenceService';
import { ProductService } from '../../domain/services/productService/productService';

const useAddProductToCart = () => {

  const [cartValue, setCartValue] = useState(0);

  const addProductToCart = async ({ id, colorCode, storageCode }) => {

    const { data: cart } = await ProductService.addProductToCart({
      colorCode,
      id,
      storageCode
    });

    if (cart) {

      setCartValue((count) => count + 1);
      PersistenceService.persist('cartCount', cartValue + 1);
    }

  };

  useEffect(() => {

    const storedCartCount = PersistenceService.get('cartCount');

    if (storedCartCount) {
      setCartValue(storedCartCount);
    }
    
  }, []);

  return { addProductToCart, cartValue  };

};

export default useAddProductToCart;
