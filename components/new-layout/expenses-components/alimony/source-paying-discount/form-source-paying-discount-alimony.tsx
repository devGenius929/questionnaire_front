import * as React from 'react';
import CardTwo from '../../../core-layout/card-right';
import FieldsetSourcePayingExpenses from './fieldset-source-paying-discount';

export default function FormSourcePayingAlimonyExpenses() {
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetSourcePayingExpenses />
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
