/* eslint-disable jest/expect-expect */
import { render } from '@testing-library/react';
import { Search } from '../../infrastructure/components/Search';

describe('Search Bar', () => {

  const setSearchTermMock = jest.fn();

  test('should render Search component', () => {

    render(<Search searchTerm={ 'searchTerm' } setSearchTerm={ setSearchTermMock } />);

  });

});
