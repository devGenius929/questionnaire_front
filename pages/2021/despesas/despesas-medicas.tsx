import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormExpenses from '../../../components/new-layout/expenses-components/form-medical-expenses';
function Expenses({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormExpenses />
    </DefaultThemeNew>
  );
}

Expenses.getInitialProps = getServerSideProps;
export default Expenses;
