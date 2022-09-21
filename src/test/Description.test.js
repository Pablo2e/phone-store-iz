import { render, screen } from '@testing-library/react';
import { Description } from '../infrastructure/components/Description';

test('Should render Description component', () => {
    render(<Description />);
    expect(screen.getByText('Description')).toBeInTheDocument();
});