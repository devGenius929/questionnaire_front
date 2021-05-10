import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormProperty from '../../../components/new-layout/main-forms/form-property';

function FormAssetsPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormProperty />
      </div>
    </DefaultThemeNew>
  );
}

FormAssetsPage.getInitialProps = getServerSideProps;
export default FormAssetsPage;
