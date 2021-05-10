import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import MyUsers from '../../../components/new-layout/accountant /my-users';

function MyUsersPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <MyUsers />
    </DefaultThemeNew>
  );
}

MyUsersPage.getInitialProps = getServerSideProps;
export default MyUsersPage;
