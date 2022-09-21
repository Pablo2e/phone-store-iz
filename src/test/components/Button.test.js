import { render, screen } from '@testing-library/react';
import { Button } from '../../infrastructure/components/Button';

test('Should render Button component', () => {
    render(<Button />);
    expect(screen.getByText('Button')).toBeInTheDocument();
});
