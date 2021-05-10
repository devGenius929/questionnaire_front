import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormFinancialGainsFinances from '../../../components/new-layout/finances/financial-gains/form-financial-gains';

function FinancialGainsPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormFinancialGainsFinances />
    </DefaultThemeNew>
  );
}

FinancialGainsPage.getInitialProps = getServerSideProps;
export default FinancialGainsPage;
