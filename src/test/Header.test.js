import { render, screen } from '@testing-library/react';
import { Header } from '../infrastructure/components/Header';

test('Should render Header component', () => {
    render(<Header />);
    expect(screen.getByText('Header')).toBeInTheDocument();
});