import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormForeignIncomeTaxExpenses from '../../../components/new-layout/expenses-components/income-tax/foreing-income-tax/form-foreing-income-tax';
function ForeingIncomesTaxPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormForeignIncomeTaxExpenses />
    </DefaultThemeNew>
  );
}

ForeingIncomesTaxPage.getInitialProps = getServerSideProps;
export default ForeingIncomesTaxPage;
