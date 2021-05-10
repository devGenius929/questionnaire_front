import * as React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { TranslationProvider } from '../../../../translation/translation-provider';
import { initialState } from '../../../../../state/store';
import Expenses from './expenses';
import { createReceivedCash } from '../../../../../typing';
import { v4 as uuid } from 'uuid';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      locale: 'en-US',
    };
  },
}));

describe('Autonomous Expense', () => {
  const mockStore = configureStore();
  const receivedCash = createReceivedCash(uuid());

  it('renders correctly', () => {
    const store = mockStore(initialState);

    const tree = renderer
      .create(
        <TranslationProvider>
          <Provider store={store}>
            <Expenses receivedCash={receivedCash} />
          </Provider>
        </TranslationProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
