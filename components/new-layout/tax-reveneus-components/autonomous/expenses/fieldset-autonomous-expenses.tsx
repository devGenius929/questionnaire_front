import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from '../../../core-layout/progress-bar';
import { FormattedMessage } from 'react-intl';
import { ActionName } from '../../../../../state/store';
import {
  IncomeNavegation,
  getCurrentIncomeNavegation,
} from '../../../../../typing/option-navegation';
import { AuthenticatedProps, ReceivedCash } from '../../../../../typing';
import BottomNavegation from '../../../../bottom-navegation';
import FieldsetAutonomousExpensesItem from './fieldset-autonomous-expenses-item';
import { v4 as uuid } from 'uuid';
import { saveDeclaration } from '../../../../../state/graphql/declaration';

export default function FieldsetAutonomousExpenses({
  session,
}: AuthenticatedProps) {
  const nav: IncomeNavegation = useSelector((state) => state.incomeNavegation);
  const cashReceived: ReceivedCash[] = useSelector(
    (state) => state.declaration.incomes.freelance?.cashReceived,
  );
  const current = getCurrentIncomeNavegation(nav);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>
                  <FormattedMessage
                    id={
                      current?.id
                        ? current.id
                        : 'income.navegation.option.freelancer.cash-flow.right'
                    }
                  />
                </h3>
                {cashReceived &&
                  cashReceived.map((rc) => (
                    <FieldsetAutonomousExpensesItem
                      key={uuid()}
                      receivedCash={rc}
                    />
                  ))}

                <div
                  className="col-sm-12 plus-icon"
                  onClick={() => {
                    dispatch({
                      type: ActionName.AddFreelanceCashReceived,
                      payload: {},
                    });
                  }}
                >
                  <i className="fal fa-plus add_more_incluir"></i>
                  <FormattedMessage id="income.navegation.option.freelancer.cash-flow.add" />
                </div>

                <BottomNavegation
                  session={session}
                  previous="/2021/arrecadacao/rendimentos-pf"
                  next="/2021/arrecadacao/empresa-propria"
                  validation={(v) => true}
                  save={() => dispatch(saveDeclaration(session))}
                  value={{}}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
