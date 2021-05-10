import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BottomNavegation from './bottom-navegation';
import { TranslationProvider } from './translation/translation-provider';
import { initialState } from '../state/store';
import { Session } from '../typing';

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
    const session: Session = {
      user: {
        nickname: '',
        name: '',
        picture: '',
        sub: '',
      },
      idToken: '',
      accessToken: '',
      accessTokenScope: '',
      accessTokenExpiresAt: 0,
      createdAt: 0,
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <TranslationProvider>
            <BottomNavegation
              session={session}
              value={{}}
              previous="/prev"
              next="/next"
              validation={(v) => true}
            />
          </TranslationProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
