import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { singleProduct } from '../../../fixtures/singleProduct.fixture'
import { Item } from '../../infrastructure/components/Item';

describe('Item', () => {
    test('should render Item', () => {
        const { id, imgUrl, brand, model, price } = singleProduct;
        render(
            <BrowserRouter>
                <Item
                    id={id}
                    imgUrl={imgUrl}
                    brand={brand}
                    model={model}
                    price={price}
                />
            </BrowserRouter>
        );
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByText(brand)).toBeInTheDocument();
        expect(screen.getByText(model)).toBeInTheDocument();
        expect(screen.getByText(`${price}€`)).toBeInTheDocument();
    });

    test('should render Item with default text if device has not price', () => {
      const { id, imgUrl, brand, model } = singleProduct;
      const expectedText = 'Price not available';
      render(
        <BrowserRouter>
            <Item
                id={id}
                imgUrl={imgUrl}
                brand={brand}
                model={model}
            />
        </BrowserRouter>
      );
      expect(screen.getByText(expectedText)).toBeInTheDocument();
    });
  
  });