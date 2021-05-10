import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import DependantsDataForm from '../../../components/new-layout/personal-form/forms-dependants/form-dependants-data';
import Header from '../../../components/new-layout/core-layout/header';
function DependantsDataPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <DependantsDataForm />
    </DefaultThemeNew>
  );
}

DependantsDataPage.getInitialProps = getServerSideProps;
export default DependantsDataPage;
