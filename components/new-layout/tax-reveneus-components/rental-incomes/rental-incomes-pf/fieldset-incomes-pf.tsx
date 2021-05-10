import * as React from 'react';
import ProgressBar from '../../../core-layout/progress-bar';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import SelectPerson from '../../../../select-person';
import RentalIncomesPF from './rental-incomes-pf';
import {
  IncomeNavegation,
  getCurrentIncomeNavegation,
} from '../../../../../typing/option-navegation';
import Navegation from '../../navegation';
import { AuthenticatedProps } from '../../../../../typing';

export default function FieldsetIncomesPF({ session }: AuthenticatedProps) {
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
                        : 'income.navegation.option.received-rent'
                    }
                  />
                </h3>

                <p>
                  <FormattedMessage
                    id={
                      current
                        ? current.description
                        : 'income.navegation.option.received-rent.description'
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
                    <RentalIncomesPF />
                  </div>
                </div>

                <Navegation
                  session={session}
                  backUrl="/2021/arrecadacao/empresa-propria"
                  nextUrl="/2021/arrecadacao/aluguel-pj"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
