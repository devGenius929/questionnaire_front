import * as React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import IncomesOwnCompany from './own-company';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  IncomeNavegation,
  getCurrentIncomeNavegation,
} from '../../../../typing/option-navegation';
import BottomNavegation from '../../../bottom-navegation';
import { saveDeclaration } from '../../../../state/graphql/declaration';
import { AuthenticatedProps } from '../../../../typing';

export default function FieldsetOwnCompany({ session }: AuthenticatedProps) {
  const dispatch = useDispatch();
  const nav: IncomeNavegation = useSelector((state) => state.incomeNavegation);
  const current = getCurrentIncomeNavegation(nav);
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
                      current
                        ? current.id
                        : 'income.navegation.option.salaried-work'
                    }
                  />
                </h3>
                <p className="text-muted">
                  <FormattedMessage
                    id={
                      current?.description
                        ? current.description
                        : 'income.navegation.option.salaried-work.description'
                    }
                  />
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem recebeu?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>
                    <IncomesOwnCompany />
                  </div>
                </div>
                <BottomNavegation
                  session={session}
                  previous="/2021/arrecadacao"
                  next="/2021/despesas"
                  value={useSelector((state) => state.incomeNavegation)}
                  save={() => {
                    dispatch(saveDeclaration(session));
                  }}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
