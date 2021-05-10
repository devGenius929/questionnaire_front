import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormOficialWelfareExpenses from '../../../components/new-layout/expenses-components/oficial-welfare/form-oficial-welfare';
function OficialWelfareExpensesPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormOficialWelfareExpenses />
    </DefaultThemeNew>
  );
}

OficialWelfareExpensesPage.getInitialProps = getServerSideProps;
export default OficialWelfareExpensesPage;
