import { render } from '@testing-library/react';
import { Actions } from '../../infrastructure/components/Actions';
import { singleProduct } from '../../../fixtures/singleProduct.fixture'

const onSubmitMock = jest.fn();
const onChangeColorMock = jest.fn();
const onChangeStorageMock = jest.fn();
const setUserOptionsMock = jest.fn();

describe('Actions', () => {
  test('should render Actions component', () => {
    const { id } = singleProduct;
    const { options: optionsMock } = singleProduct;
    const { colors, storages } = optionsMock;
    const userOptionsMock = {
      id,
      colorCode: colors[0].code,
      storageCode: storages[0].code,
    };
    render(
      <Actions
        item={singleProduct}
        id={id}
        onSubmit={onSubmitMock}
        onChangeColor={onChangeColorMock}
        onChangeStorage={onChangeStorageMock}
        options={optionsMock}
        userOptions={userOptionsMock}
        setUserOptions={setUserOptionsMock}
      />
    );
  });
});