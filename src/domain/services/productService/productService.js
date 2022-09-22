/* eslint-disable no-console */
import axios from 'axios';

export const getDataFromApi = async () => {

  try {

    const response = await axios.get('https://front-test-api.herokuapp.com/api/product');
    const isResponseOk = response.data.length !== 0;
    
    if (isResponseOk) {
  
      return response;
  
    } else {
  
      console.log('error');
  
    }
  
  } catch (error) {

    console.log(error);

  }

};

export const getItemFromApi = async (id) => {

  try {

    const response = await axios.get(`https://front-test-api.herokuapp.com/api/product/${id}`);
    const isResponseOk = response.data.length !== 0;

    if (isResponseOk) {

      return response;

    } else {

      console.log('error');

    }

  } catch (error) {

    console.log(error);
  }
  
};

export const addProductToCart = async (product) => {

  try {

    const response = await axios.post('https://front-test-api.herokuapp.com/api/cart', {
      id: product.id,
      colorCode: product.colorCode,
      storageCode: product.storageCode
    });
    const isResponseOk = response.data.length !== 0;

    if (isResponseOk) {

      return response;

    } else {

      console.log('error');

    }

  } catch (error) {

    console.log(error);
  }
  
};

export const ProductService = {
  getDataFromApi,
  getItemFromApi,
  addProductToCart
};
