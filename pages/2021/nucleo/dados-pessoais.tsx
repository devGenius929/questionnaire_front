import React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import PersonalContent from '../../../components/new-layout/personal-form/form-personal-data';
import Header from '../../../components/new-layout/core-layout/header';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import { useDispatch } from 'react-redux';

function PersonalDataPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <PersonalContent session={props.session}/>
    </DefaultThemeNew>
  );
}

PersonalDataPage.getInitialProps = getServerSideProps;
export default PersonalDataPage;
