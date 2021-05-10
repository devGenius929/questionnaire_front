import React from 'react';
import CardTwo from '../core-layout/card-right';
import FieldsetPersonalData from './field-set-personal';
import { FormattedMessage } from 'react-intl';
import { AuthenticatedProps } from '../../../typing';

export default function FormAddressPage({ session }: AuthenticatedProps) {
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetPersonalData session={session} />
        <CardTwo img="/images/newlayout/images/step2.svg/">
          <div className="right-text">
            <h2>
              <FormattedMessage id="new-layout.personal-form.form-pessoal-data.title" />
            </h2>
            <p>
              <FormattedMessage id="new-layout.personal-form.form-pessoal-data.description" />
            </p>
          </div>
        </CardTwo>
      </div>
    </div>
  );
}
