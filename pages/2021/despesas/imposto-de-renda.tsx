import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormMonthlyTaxExpenses from '../../../components/new-layout/expenses-components/income-tax/monthly-tax/form-monthly-tax';

function MonthlyTaxExpenses({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormMonthlyTaxExpenses />
    </DefaultThemeNew>
  );
}

MonthlyTaxExpenses.getInitialProps = getServerSideProps;
export default MonthlyTaxExpenses;
