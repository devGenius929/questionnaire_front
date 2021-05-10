import React from 'react';
import renderer from 'react-test-renderer';
import { TranslationProvider } from '../../translation/translation-provider';
import IncomeNavetationItem from './income-item';
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
      id: "income.navegation.option.salaried-work",
      idRight: "income.navegation.option.salaried-work.right",
      description: "income.navegation.option.salaried-work.description",
      rightDescription: "income.navegation.option.salaried-work.description.right",
      path: "/2021/arrecadacao/trabalho-assalariado",
      featured: false,
      activated: false,
    };

    const tree = renderer
        .create(
            <TranslationProvider>
              <Provider store={store}>
                <IncomeNavetationItem incomeOption={option}/>
              </Provider>
            </TranslationProvider>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
