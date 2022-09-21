import { render, screen } from '@testing-library/react';
import { MainLayout } from '../../infrastructure/layout/MainLayout';

test('Should render MainLayout component', () => {
    render(<MainLayout />);
    expect(screen.getByText('MainLayout')).toBeInTheDocument();
});