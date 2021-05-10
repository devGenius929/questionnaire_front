import * as React from 'react';
import CardTwo from '../../../core-layout/card-right';
import FieldsetExteriorSeveralIncomes from './fieldset-several-incomes';
import { AuthenticatedProps } from '../../../../../typing';

export default function ExteriorSeveralIncomesForm({
  session,
}: AuthenticatedProps) {
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetExteriorSeveralIncomes session={session} />
        <CardTwo img="/images/newlayout/images/man-right.svg">
          <div className="right-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostr
            </p>
          </div>
        </CardTwo>
      </div>
    </div>
  );
}