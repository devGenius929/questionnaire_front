import * as React from 'react';
import ProgressBar from '../../../core-layout/progress-bar';
import SelectPerson from '../../../../select-person';
import ExteriorSeveralIncomes from './exterior-several-incomes';
import Navegation from '../../navegation';
import { AuthenticatedProps } from '../../../../../typing';

export default function FieldsetExteriorSeveralIncomes({
  session,
}: AuthenticatedProps) {
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>Rendimentos Diversos - Exterior</h3>

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
                    <ExteriorSeveralIncomes />
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir último rendimento no exterior
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      novo rendimento no exterior
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
