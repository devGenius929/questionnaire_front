import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeclarant } from '../../../state/graphql/declarant';
import { fetchDeclaration } from '../../../state/graphql/declaration';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import AutonomousCompany from '../../../components/new-layout/tax-reveneus-components/autonomous/incomes-company/incomes-company-form';

function CompanyEarningsPage({ props }: AuthProps) {
  const dispatch = useDispatch();
  dispatch(fetchDeclarant(props.session));
  dispatch(fetchDeclaration(props.session));

  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <AutonomousCompany />
      </div>
    </DefaultThemeNew>
  );
}

CompanyEarningsPage.getInitialProps = getServerSideProps;
export default CompanyEarningsPage;
