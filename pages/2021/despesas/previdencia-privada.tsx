import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormPrivatePensionExpenses from '../../../components/new-layout/expenses-components/private-pension/form-private-pension';

function PrivatePensionExpensesPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormPrivatePensionExpenses />
    </DefaultThemeNew>
  );
}

PrivatePensionExpensesPage.getInitialProps = getServerSideProps;
export default PrivatePensionExpensesPage;
