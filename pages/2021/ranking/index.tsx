import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormRanking from '../../../components/new-layout/ranking/form-ranking';
function Ranking({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormRanking />
    </DefaultThemeNew>
  );
}

Ranking.getInitialProps = getServerSideProps;
export default Ranking;
