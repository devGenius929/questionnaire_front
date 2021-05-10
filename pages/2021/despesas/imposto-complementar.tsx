import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormComplementaryIncomeTaxExpenses from '../../../components/new-layout/expenses-components/income-tax/complementary-income-tax/form-complementary-income-tax';
function ComplementaryIncomesTaxExpenses({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormComplementaryIncomeTaxExpenses />
    </DefaultThemeNew>
  );
}

ComplementaryIncomesTaxExpenses.getInitialProps = getServerSideProps;
export default ComplementaryIncomesTaxExpenses;
