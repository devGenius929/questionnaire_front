import * as React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import CardTwo from '../../../core-layout/card-right';
import FieldsetAutonomousExpense from './fieldset-autonomous-expenses';
import {
  IncomeNavegation,
  getCurrentIncomeNavegation,
} from '../../../../../typing/option-navegation';
import { AuthenticatedProps } from '../../../../../typing';

export default function AutonomousExpenseForm({ session }: AuthenticatedProps) {
  const nav: IncomeNavegation = useSelector((state) => state.incomeNavegation);
  const current = getCurrentIncomeNavegation(nav);
  return (
    <div className="card card0">
      <div className="d-flex flex-lg-row flex-column-reverse">
        <FieldsetAutonomousExpense session={session} />
        <CardTwo img="/images/newlayout/images/man-right.svg">
          <div className="right-text">
            <h2>
              <FormattedMessage
                id={
                  current?.id
                    ? current.id
                    : 'income.navegation.option.freelancer.cash-flow.right'
                }
              />
            </h2>
            <p>
              <FormattedMessage
                id={
                  current?.rightDescription
                    ? current.rightDescription
                    : 'income.navegation.option.freelancer.cash-flow.description.right'
                }
              />
            </p>
          </div>
        </CardTwo>
      </div>
    </div>
  );
}
