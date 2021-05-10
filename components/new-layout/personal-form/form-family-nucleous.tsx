import React from 'react';
import { FormattedMessage } from 'react-intl';
import CardTwo from '../core-layout/card-right';
import FieldsetFamilyNucleous from './fieldset-family-nucleous';
import { AuthenticatedProps } from '../../../typing';

export default function FormFamilyNucleous({ session }: AuthenticatedProps) {
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetFamilyNucleous session={session} />
        <CardTwo img="/images/newlayout/images/step2.svg/">
          <div className="right-text">
            <h2>
              <FormattedMessage id="new-layout.personal-form.form-family-nucleous.title.right" />
            </h2>
            <p>
              <FormattedMessage id="new-layout.personal-form.form-family-nucleous.description.right" />
            </p>
          </div>
        </CardTwo>
      </div>
    </div>
  );
}
