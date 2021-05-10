import * as React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mockAuthenticatedProps } from '../../../../../utils/tests';
import { initialState } from '../../../../../state/store';
import { TranslationProvider } from '../../../../translation/translation-provider';
import FieldsetAutonomousExpenses from './fieldset-autonomous-expenses';

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
  const props = mockAuthenticatedProps();

  it('renders correctly', () => {
    const store = mockStore(initialState);

    const tree = renderer
      .create(
        <TranslationProvider>
          <Provider store={store}>
            <FieldsetAutonomousExpenses session={props.session} />
          </Provider>
        </TranslationProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
