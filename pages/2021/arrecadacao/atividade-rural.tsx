import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import { fetchDeclaration } from '../../../state/graphql/declaration';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import CashFlowRural from '../../../components/new-layout/tax-reveneus-components/rural-activity/cashflow-rural/cashflow-rural-form';

function CashFlowRuralActivity({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));
  dispatch(fetchDeclaration(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <CashFlowRural />
      </div>
    </DefaultThemeNew>
  );
}

CashFlowRuralActivity.getInitialProps = getServerSideProps;
export default CashFlowRuralActivity;
