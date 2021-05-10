import * as React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import IncomesWithTax from './incomes-with-tax';
import Navegation from '../../../main-navegation';

export default function FieldsetIncomesWithTax() {
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>Rendimentos com Imposto em Juízo</h3>

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
                    <IncomesWithTax />
                  </div>
                </div>
                <Navegation />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
