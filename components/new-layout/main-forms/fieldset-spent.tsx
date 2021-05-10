import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from '../core-layout/progress-bar';
import Navegation from '../expenses-components/navegation';
import ExpenseNavegation from '../custom-navegation/expense';

export default function FieldsetSpent() {
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={40} />
              <fieldset>
                <h3>Como gastou dinheiro em 2020?</h3>

                <p className="text-muted">
                  Informe abaixo os itens necessários para prosseguir. :)
                </p>

                <ExpenseNavegation
                  expenseOptions={useSelector(
                      (state) => state.expenseNavegation.options,
                  )}
                />

                <Navegation />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
