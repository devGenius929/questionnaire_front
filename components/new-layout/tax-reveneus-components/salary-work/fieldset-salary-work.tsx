import * as React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import Navegation from '../navegation';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  IncomeNavegation,
  getCurrentIncomeNavegation,
} from '../../../../typing/option-navegation';
import { AuthenticatedProps } from '../../../../typing';
import SalaryWorkJob from './salary-work-job';
import { v4 as uuid } from 'uuid';
import { ActionName } from '../../../../state/store';

export default function FieldsetSalaryWork({ session }: AuthenticatedProps) {
  const nav: IncomeNavegation = useSelector((state) => state.incomeNavegation);
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
                      getCurrentIncomeNavegation(nav)?.id ||
                      'income.navegation.option.salaried-work'
                    }
                  />
                </h3>

                <div className="form-group">
                  <div className="row">
                    {useSelector(
                      (state) => state.declaration.incomes.salaryWork?.jobs,
                    )?.map((j, i) => (
                      <SalaryWorkJob key={uuid()} index={i} />
                    ))}
                    <div
                      className="col-sm-12 plus-icon"
                      onClick={() =>
                        dispatch({
                          type: ActionName.CreateSalaryWorkJob,
                          payload: {},
                        })
                      }
                    >
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      novo recebimento de pessoa jurídica
                    </div>
                  </div>
                </div>
                <Navegation
                  session={session}
                  backUrl="/2021/arrecadacao"
                  nextUrl="/2021/despesas"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
