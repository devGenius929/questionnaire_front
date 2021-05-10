/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import CardOne from './landing-page-card';
import CardTwo from '../core-layout/card-right';
import { FormattedMessage } from 'react-intl';

export default function ContentPage() {
  return (
    <>
      <div className="d-flex flex-lg-row flex-column-reverse">
        <CardOne />
        <CardTwo img="/images/newlayout/images/undraw_Balloons.svg/">
          <div className="right-text">
            <h2>
              <FormattedMessage id="home.banner.title" />
            </h2>
            <p>
              <FormattedMessage id="home.banner.description" />
            </p>
          </div>
        </CardTwo>
      </div>
    </>
  );
}
