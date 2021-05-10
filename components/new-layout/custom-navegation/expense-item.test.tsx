import React from 'react';
import renderer from 'react-test-renderer';
import { TranslationProvider } from '../../translation/translation-provider';
import ExpenseNavetationItem from './expense-item';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../../state/store';

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
    const option = {
      id: "expences.navegation.option.health",
      idRight: "expences.navegation.option.health.right",
      description: "expences.navegation.option.health.description",
      rightDescription: "expences.navegation.option.health.description.right",
      path: "/2021/despesas/despesas-medicas",
      featured: false,
      activated: false,
    };

    const tree = renderer
        .create(
            <TranslationProvider>
              <Provider store={store}>
                <ExpenseNavetationItem expenseOption={option}/>
              </Provider>
            </TranslationProvider>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
