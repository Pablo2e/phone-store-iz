import { render, screen } from '@testing-library/react';
import { ProductListPage } from '../../infrastructure/pages/ProductListPage';

test('Should render ProductListPage component', () => {
    render(<ProductListPage />);
    expect(screen.getByText('ProductListPage')).toBeInTheDocument();
});
