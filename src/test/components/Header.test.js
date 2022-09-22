import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../infrastructure/components/Header';


describe('Header', () => {

    test('Should render Header component', () => {
        render(
          <BrowserRouter>
            <Header cartValue={ '1' } />
          </BrowserRouter>);
        expect(screen.getByText('Phone Store')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
      });
      
    
});