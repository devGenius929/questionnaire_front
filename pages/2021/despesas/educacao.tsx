import * as React from 'react';
import DefaultThemeNew from '../../../components/themes/new';
import getServerSideProps from '../../../utils/get-session';
import { AuthProps } from '../../../typing';
import Header from '../../../components/new-layout/core-layout/header';
import FormEducationExpenses from '../../../components/new-layout/expenses-components/form-education-expenses';
function EducationExpenses({ props }: AuthProps) {
  return (
    <DefaultThemeNew session={props.session}>
      <Header />
      <FormEducationExpenses />
    </DefaultThemeNew>
  );
}

EducationExpenses.getInitialProps = getServerSideProps;
export default EducationExpenses;
