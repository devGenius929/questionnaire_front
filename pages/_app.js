/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import * as styles from '../styles/newStyles.css';
import React, { useEffect } from 'react';
import Router from 'next/router';
import { wrapper } from '../state/store';
import googleTagManagerPageView from '../utils/gtm';
import { ApolloProvider } from "@apollo/client";
import { useApollo } from '../state/apollo-client';
import { TranslationProvider } from '../components/translation/translation-provider';

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

const WrappedApp = ({Component, pageProps}) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    const handleRouteChange = (url) => googleTagManagerPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <SafeHydrate>
        <TranslationProvider>
          <Component {...pageProps} />
        </TranslationProvider>
      </SafeHydrate>
    </ApolloProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
