import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import AddressOcupation from '../../../components/new-layout/personal-form/form-ocupation';
import Header from '../../../components/new-layout/core-layout/header';
function FormOcupationPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <AddressOcupation />
      </div>
    </DefaultThemeNew>
  );
}

FormOcupationPage.getInitialProps = getServerSideProps;
export default FormOcupationPage;
