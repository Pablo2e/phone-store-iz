import { render, screen } from '@testing-library/react';
import { Actions } from '../infrastructure/components/Actions';

test('Should render Actions component', () => {
    render(<Actions />);
    expect(screen.getByText('Actions')).toBeInTheDocument();
});