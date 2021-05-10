import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import FormVariableIncomesFinances from '../../../components/new-layout/finances/variable-incomes/earnings-statement/form-variable-incomes';
import Header from '../../../components/new-layout/core-layout/header';
Header;
function VariableIncomesPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormVariableIncomesFinances />
    </DefaultThemeNew>
  );
}

VariableIncomesPage.getInitialProps = getServerSideProps;
export default VariableIncomesPage;
