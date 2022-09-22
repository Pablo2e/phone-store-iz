import { Button } from './Button';

export const AddToCartButton = ({ userOptions, text }) => {
  const disabled = userOptions
    ? !userOptions.colorCode || !userOptions.storageCode
    : true;

  return (
    <Button
      text={ text || 'Add to cart' }
      disabled={ disabled }
    />
  );
};


