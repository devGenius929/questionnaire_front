import * as React from 'react';
import CardTwo from '../../core-layout/card-right';
import FieldsetOwnCompany from './fieldset-own-company';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  IncomeNavegation,
  getCurrentIncomeNavegation,
} from '../../../../typing/option-navegation';
import { AuthenticatedProps } from '../../../../typing';

export default function OwnCompanyForm({ session }: AuthenticatedProps) {
  const nav: IncomeNavegation = useSelector((state) => state.incomeNavegation);
  const current = getCurrentIncomeNavegation(nav);
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetOwnCompany session={session} />
        <CardTwo img="/images/newlayout/images/man-right.svg">
          <div className="right-text">
            <h2>
              <FormattedMessage
                id={
                  current?.id
                    ? current.id
                    : 'income.navegation.option.salaried-work.right'
                }
              />
            </h2>
            <p>
              <FormattedMessage
                id={
                  current?.rightDescription
                    ? current.rightDescription
                    : 'income.navegation.option.salaried-work.description.right'
                }
              />
            </p>
          </div>
        </CardTwo>
      </div>
    </div>
  );
}
