import * as React from 'react';
import CardTwo from '../core-layout/card-right';
import FieldsetTaxReveneus from './fieldset-tax-reveneus';
import { FormattedMessage } from 'react-intl';
import { AuthenticatedProps } from '../../../typing';

export default function TaxReveneusPage({ session }: AuthenticatedProps) {
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetTaxReveneus session={session} />
        <CardTwo img="/images/newlayout/images/man-right.svg">
          <div className="right-text">
            <h2>
              <FormattedMessage id="new-layout.tax-revenues-components.form-tax-revenues.title" />
            </h2>
            <p>
              <FormattedMessage id="new-layout.tax-revenues-components.form-tax-revenues.description" />
            </p>
          </div>
        </CardTwo>
      </div>
    </div>
  );
}
