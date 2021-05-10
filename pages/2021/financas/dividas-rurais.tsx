import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormRuralDebtsFinances from '../../../components/new-layout/finances/debts/rural-debt /form-rural-debt';

function DebtsRuralPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormRuralDebtsFinances />
    </DefaultThemeNew>
  );
}

DebtsRuralPage.getInitialProps = getServerSideProps;
export default DebtsRuralPage;
