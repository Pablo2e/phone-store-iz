import { render } from '@testing-library/react';
import { Image } from '../../infrastructure/components/Image';

describe('Image', () => {
    test('should render Image component', () => {
      render(
        <Image imgUrl="https://via.placeholder.com/10" altText="placeholder" />
      );
    });
});