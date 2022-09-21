import { render, screen } from '@testing-library/react';
import { ProductDetailPage } from '../../infrastructure/pages/ProductDetailPage';

test('Should render ProductDetailPage component', () => {
    render(<ProductDetailPage />);
    expect(screen.getByText('ProductDetailPage')).toBeInTheDocument();
});

