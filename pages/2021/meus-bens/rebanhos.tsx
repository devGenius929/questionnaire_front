import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormFlock from '../../../components/new-layout/assets-and-rights/rural-property/form-flock';

function FormFlockPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormFlock />
      </div>
    </DefaultThemeNew>
  );
}

FormFlockPage.getInitialProps = getServerSideProps;
export default FormFlockPage;
