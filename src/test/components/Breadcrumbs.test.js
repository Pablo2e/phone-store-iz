import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from '../../infrastructure/components/Breadcrumbs';

test('Should render Breadcrumbs component', () => {
    render(<Breadcrumbs />);
    expect(screen.getByText('Breadcrumbs')).toBeInTheDocument();
});