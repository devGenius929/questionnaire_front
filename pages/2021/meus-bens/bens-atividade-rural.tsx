import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormRuralActivityGoods from '../../../components/new-layout/assets-and-rights/rural-property/form-rural-activity-goods';

function FormRuralActivityGoodsPage({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <div className="main-content">
        <Header />
        <FormRuralActivityGoods />
      </div>
    </DefaultThemeNew>
  );
}

FormRuralActivityGoodsPage.getInitialProps = getServerSideProps;
export default FormRuralActivityGoodsPage;
