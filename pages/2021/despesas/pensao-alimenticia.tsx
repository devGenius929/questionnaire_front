import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormSourcePayingAlimonyExpenses from '../../../components/new-layout/expenses-components/alimony/source-paying-discount/form-source-paying-discount-alimony';

function AlimonySourcePayingPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormSourcePayingAlimonyExpenses />
    </DefaultThemeNew>
  );
}

AlimonySourcePayingPage.getInitialProps = getServerSideProps;
export default AlimonySourcePayingPage;
