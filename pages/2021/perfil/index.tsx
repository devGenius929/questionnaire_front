import * as React from 'react';
import ProfileScreen from '../../../components/new-layout/profile/profile-data';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';

function ProfilePage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <ProfileScreen />
    </DefaultThemeNew>
  );
}

ProfilePage.getInitialProps = getServerSideProps;
export default ProfilePage;
