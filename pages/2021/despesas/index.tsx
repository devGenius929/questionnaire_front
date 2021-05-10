import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormSpent from '../../../components/new-layout/main-forms/form-spent';

function FormExpensesPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormSpent />
      </div>
    </DefaultThemeNew>
  );
}

FormExpensesPage.getInitialProps = getServerSideProps;
export default FormExpensesPage;
