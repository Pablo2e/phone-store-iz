
import { allProducts } from '../../../fixtures/allProducts.fixture';
import { singleProduct } from '../../../fixtures/singleProduct.fixture';
import { ProductService } from '../../domain/services/productService/productService';

jest.mock('../../domain/services/productService/productService');

describe('ProductService', () => {
  test('should return all products', async () => {
    ProductService.getDataFromApi.mockImplementation(() =>
      Promise.resolve({ data: [...allProducts] })
    );

    const { data: products } = await ProductService.getDataFromApi();
    expect(products).toMatchObject(allProducts);
  });

  test('should return a product detail by id', async () => {
    ProductService.getItemFromApi.mockImplementation(() =>
      Promise.resolve({ data: { ...singleProduct } })
    );
    const { data: productDetail } = await ProductService.getItemFromApi(
      singleProduct.id
    );
    expect(ProductService.getItemFromApi).toHaveBeenCalledWith(singleProduct.id);
    expect(productDetail).toMatchObject(singleProduct);
  });

  test('should add a product to cart', async () => {
    ProductService.addProductToCart.mockImplementation(() =>
      Promise.resolve({ data: { count: 1 } })
    );

    const productToAdd = {
      id: 'ZmGrkLRPXOTpxsU4jjAcv',
      colorCode: 1000,
      storageCode: 2000,
    };

    const { data: count } = await ProductService.addProductToCart(productToAdd);
    expect(count).toMatchObject({ count: 1 });
  });
});
