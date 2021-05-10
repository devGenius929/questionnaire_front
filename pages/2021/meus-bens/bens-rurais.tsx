import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormRuralPropertys from '../../../components/new-layout/assets-and-rights/rural-property/form-rural-property';

function FormAssetsRuralPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormRuralPropertys />
      </div>
    </DefaultThemeNew>
  );
}

FormAssetsRuralPage.getInitialProps = getServerSideProps;
export default FormAssetsRuralPage;
