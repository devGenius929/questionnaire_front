import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormDonateExpenses from '../../../components/new-layout/expenses-components/form-donate';

function DonateExpensesPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormDonateExpenses />
    </DefaultThemeNew>
  );
}

DonateExpensesPage.getInitialProps = getServerSideProps;
export default DonateExpensesPage;
