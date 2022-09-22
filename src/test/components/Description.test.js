/* eslint-disable jest/expect-expect */
import { render, screen } from '@testing-library/react';
import { singleProduct } from '../../../fixtures/singleProduct.fixture';
import { Description } from '../../infrastructure/components/Description';

describe('Description', () => {

  test('should render Description', () => {
    render(<Description product={ singleProduct } />);
  });

  test('should render product properties', () => {
    render(<Description product={ singleProduct } />);
    expect(screen.getByText(/brand/i)).toBeInTheDocument();
    expect(screen.getByText(/model/i)).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/cpu/i)).toBeInTheDocument();
    expect(screen.getByText(/operative sistem/i)).toBeInTheDocument();
    expect(screen.getByText(/display resolution/i)).toBeInTheDocument();
    expect(screen.getByText(/primary camera/i)).toBeInTheDocument();
    expect(screen.getByText(/secondary camera/i)).toBeInTheDocument();
    expect(screen.getByText(/dimentions/i)).toBeInTheDocument();
    expect(screen.getByText(/weight/i)).toBeInTheDocument();
  });
    
});
