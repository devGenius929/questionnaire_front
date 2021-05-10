import * as React from 'react';
import DefaultThemeNew from '../../components/themes/new';
import getServerSideProps from '../../utils/get-session';
import { AuthProps } from '../../typing';
import ContentPage from '../../components/new-layout/landing-components/content-page';
import HeaderLayout from '../../components/new-layout/core-layout/header';

function Page({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <HeaderLayout />
      <ContentPage />
    </DefaultThemeNew>
  );
}

Page.getInitialProps = getServerSideProps;
export default Page;
