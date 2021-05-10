import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormFamilyNucleous from '../../../components/new-layout/personal-form/form-family-nucleous';

function DependantsPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormFamilyNucleous session={props.session} />
    </DefaultThemeNew>
  );
}

DependantsPage.getInitialProps = getServerSideProps;
export default DependantsPage;
