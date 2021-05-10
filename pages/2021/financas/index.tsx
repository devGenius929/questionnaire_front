import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormFinance from '../../../components/new-layout/main-forms/form-finance';

function FormCollectionPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormFinance />
      </div>
    </DefaultThemeNew>
  );
}

FormCollectionPage.getInitialProps = getServerSideProps;
export default FormCollectionPage;
