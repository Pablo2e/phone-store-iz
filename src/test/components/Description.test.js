import { render, screen } from '@testing-library/react';
import { Description } from '../../infrastructure/components/Description';
import { singleProduct } from '../../../fixtures/singleProduct.fixture'

describe('Description', () => {

    test('should render Description', () => {
        render(<Description product={singleProduct} />);
    });

    test('should render product properties', () => {
      render(<Description product={singleProduct} />);
      expect(screen.getByText(/brand/i)).toBeInTheDocument();
      expect(screen.getByText(/model/i)).toBeInTheDocument();
      expect(screen.getByText(/price/i)).toBeInTheDocument();
      expect(screen.getByText(/cpu/i)).toBeInTheDocument();
      expect(screen.getByText(/ram/i)).toBeInTheDocument();
      expect(screen.getByText(/^os$/i)).toBeInTheDocument();
      expect(screen.getByText(/display resolution/i)).toBeInTheDocument();
      expect(screen.getByText(/battery/i)).toBeInTheDocument();
      expect(screen.getByText(/cameras/i)).toBeInTheDocument();
      expect(screen.getByText(/display type/i)).toBeInTheDocument();
      expect(screen.getByText(/display size/i)).toBeInTheDocument();
      expect(screen.getByText(/chipset/i)).toBeInTheDocument();
      expect(screen.getByText(/external memory/i)).toBeInTheDocument();
      expect(screen.getByText(/internal memory/i)).toBeInTheDocument();
      expect(screen.getByText(/^usb$/i)).toBeInTheDocument();
    });
    
});