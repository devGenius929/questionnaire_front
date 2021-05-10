import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormDependants from '../../../components/new-layout/personal-form/form-dependants';
function DependantsPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormDependants />
    </DefaultThemeNew>
  );
}

DependantsPage.getInitialProps = getServerSideProps;
export default DependantsPage;
