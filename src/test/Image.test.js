import { render, screen } from '@testing-library/react';
import { Image } from '../infrastructure/components/Image';

test('Should render Search component', () => {
    render(<Image />);
    expect(screen.getByText('Image')).toBeInTheDocument();
});