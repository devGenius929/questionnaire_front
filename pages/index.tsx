import * as React from 'react';
import { useDispatch } from 'react-redux';
import DefaultThemeNew from '../components/themes/new';
import getServerSideProps from '../utils/get-session';
import { AuthProps } from '../typing';
import ContentPage from '../components/new-layout/landing-components/content-page';
import HeaderLayout from '../components/new-layout/core-layout/header';
import Head from 'next/head';
import { ActionName } from '../state/store';
import { FormattedMessage } from 'react-intl';

function Page({ props }: AuthProps) {
  const dispatch = useDispatch();

  dispatch({ type: ActionName.UpdateSession, payload: props.session });

  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Head>
          <title>
            <FormattedMessage id="page.title" />
          </title>
        </Head>
        <HeaderLayout />
        <ContentPage />
      </div>
    </DefaultThemeNew>
  );
}

Page.getInitialProps = getServerSideProps;
export default Page;
