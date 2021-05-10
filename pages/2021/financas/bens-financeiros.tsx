import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormFinancialAssetsFinances from '../../../components/new-layout/finances/financial-assets/form-financial-assets';
Header;
function FinancialAssetsPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormFinancialAssetsFinances />
    </DefaultThemeNew>
  );
}

FinancialAssetsPage.getInitialProps = getServerSideProps;
export default FinancialAssetsPage;
