import { render, screen } from '@testing-library/react';
import { Search } from '../../infrastructure/components/Search';

test('Should render Search component', () => {
    render(<Search />);
    expect(screen.getByText('Search')).toBeInTheDocument();
});