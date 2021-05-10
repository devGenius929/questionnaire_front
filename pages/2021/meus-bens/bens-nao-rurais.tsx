import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormNonRuralPropertys from '../../../components/new-layout/assets-and-rights/non-rural-property/form-non-rural-property';

function FormAssetsNonRuralPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormNonRuralPropertys />
      </div>
    </DefaultThemeNew>
  );
}

FormAssetsNonRuralPage.getInitialProps = getServerSideProps;
export default FormAssetsNonRuralPage;
