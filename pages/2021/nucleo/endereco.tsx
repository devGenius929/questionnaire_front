import * as React from 'react';
import { useDispatch } from 'react-redux';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import AddresForm from '../../../components/new-layout/personal-form/form-address';
import Header from '../../../components/new-layout/core-layout/header';
import { fetchDeclarant } from '../../../state/graphql/declarant';
function AddressPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <AddresForm />
    </DefaultThemeNew>
  );
}

AddressPage.getInitialProps = getServerSideProps;
export default AddressPage;
