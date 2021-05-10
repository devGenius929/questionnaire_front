import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormResult from '../../../components/new-layout/expenses-components/form-expenses-result';
function MedicalExpenses({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormResult />
    </DefaultThemeNew>
  );
}

MedicalExpenses.getInitialProps = getServerSideProps;
export default MedicalExpenses;
