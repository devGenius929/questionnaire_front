import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormIncomesTaxRecoveryFinances from '../../../components/new-layout/finances/variable-incomes/incomes-tax-recovery/form-incomes-tax-recovery';

function IncomesTaxRecoveryPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormIncomesTaxRecoveryFinances />
    </DefaultThemeNew>
  );
}

IncomesTaxRecoveryPage.getInitialProps = getServerSideProps;
export default IncomesTaxRecoveryPage;
