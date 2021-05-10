import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import FormOcupationPage from '../../../components/new-layout/personal-form/form-ocupation';
import Header from '../../../components/new-layout/core-layout/header';
function OcupationPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormOcupationPage />
    </DefaultThemeNew>
  );
}

OcupationPage.getInitialProps = getServerSideProps;
export default OcupationPage;
