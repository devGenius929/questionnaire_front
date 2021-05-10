import * as React from 'react';
import CardTwo from '../../../core-layout/card-right';
import FieldsetNonRuralDebtsFinances from './fieldset-non-rural-debt';

export default function FormNonRuralDebtsFinances() {
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetNonRuralDebtsFinances />
        <CardTwo img="/images/newlayout/images/step6.svg">
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
