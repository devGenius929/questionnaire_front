import React from 'react';
import renderer from 'react-test-renderer';
import { TranslationProvider } from '../../translation/translation-provider';
import FinanceNavetationItem from './finance-item';
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
      id: "finance.navegation.option.gains_financial_investments",
      idRight: "finance.navegation.option.gains_financial_investments.right",
      description: "finance.navegation.option.gains_financial_investments.description",
      rightDescription: "finance.navegation.option.gains_financial_investments.description.right",
      path: "/2021/financas/ganhos-financeiros",
      featured: false,
      activated: false,
    };

    const tree = renderer
        .create(
            <TranslationProvider>
              <Provider store={store}>
                <FinanceNavetationItem financeOption={option}/>
              </Provider>
            </TranslationProvider>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
