import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormNonRuralDebtsFinances from '../../../components/new-layout/finances/debts/non-rural-debt/form-non-rural-debt';

function DebtsPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormNonRuralDebtsFinances />
    </DefaultThemeNew>
  );
}

DebtsPage.getInitialProps = getServerSideProps;
export default DebtsPage;
