import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormDirectAlimonyExpenses from '../../../components/new-layout/expenses-components/alimony/direct-alimony/form-direct-alimony';

function DirectAlimonyPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormDirectAlimonyExpenses />
    </DefaultThemeNew>
  );
}

DirectAlimonyPage.getInitialProps = getServerSideProps;
export default DirectAlimonyPage;
