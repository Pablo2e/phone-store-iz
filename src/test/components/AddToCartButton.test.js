import { render, screen } from '@testing-library/react';
import { AddToCartButton } from '../../infrastructure/components/AddToCartButton'

test('Should render AddToCartButton component', () => {
    render(<AddToCartButton />);
    expect(screen.getByText('AddToCartButton')).toBeInTheDocument();
});