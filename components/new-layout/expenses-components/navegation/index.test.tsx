import React from 'react';
import renderer from 'react-test-renderer';
import { TranslationProvider } from '../../../translation/translation-provider';
import Navegation from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../../../state/store';

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

describe('Menu', () => {
  const mockStore = configureStore();

  it('renders correctly', () => {
    const store = mockStore(initialState);

    const tree = renderer
        .create(
            <TranslationProvider>
              <Provider store={store}>
                <Navegation/>
              </Provider>
            </TranslationProvider>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
