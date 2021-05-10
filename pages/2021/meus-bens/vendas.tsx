import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormSales from '../../../components/new-layout/assets-and-rights/sales/form-sales';

function FormPurchaseOfGoodsPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormSales />
      </div>
    </DefaultThemeNew>
  );
}

FormPurchaseOfGoodsPage.getInitialProps = getServerSideProps;
export default FormPurchaseOfGoodsPage;
