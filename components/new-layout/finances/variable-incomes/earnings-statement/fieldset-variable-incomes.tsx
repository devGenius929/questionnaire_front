import * as React from 'react';

import { useRouter } from 'next/router';
import ProgressBar from '../../../core-layout/progress-bar';
import VariableIncomes from './variable-incomes';
export default function FieldsetVariableIncomes() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={60} />
              <fieldset>
                <h3>Renda Variável</h3>
                <p className="text-muted">
                  Informe aqui os ganhos não isentos em renda variável do seu
                  núcleo familiar em 2020.
                </p>
                <VariableIncomes />
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/financas');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/financas/recuperacao-ir-retido');
                  }}
                >
                  Continuar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
