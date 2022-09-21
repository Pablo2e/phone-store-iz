import { render, screen } from '@testing-library/react';
import { Item } from '../../infrastructure/components/Item';

test('Should render Item component', () => {
    render(<Item />);
    expect(screen.getByText('Item')).toBeInTheDocument();
});