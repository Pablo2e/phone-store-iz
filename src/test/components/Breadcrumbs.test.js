import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BreadCrumbs } from '../../infrastructure/components/BreadCrumbs';


describe('BreadCrumbs', () => {

  test('should render Breadcrumb component', () => {
    render(
      <BrowserRouter>
        <BreadCrumbs />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

});
