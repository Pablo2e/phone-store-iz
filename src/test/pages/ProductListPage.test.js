import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductListPage } from '../../infrastructure/pages/ProductListPage';

describe('Item', () => {    

    test('Should render ProductListPage component', () => {    
        render(
            <BrowserRouter>
                <ProductListPage />
            </BrowserRouter>
        );
        expect(screen.getByText('ProductListPage')).toBeInTheDocument();
    });

});

