import * as React from 'react';
import SelectPerson from '../../../../select-person';
import ProgressBar from '../../../core-layout/progress-bar';
import { useRouter } from 'next/router';
export default function LossRural() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>Prejuízo Acumulado</h3>

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

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="LossRuralActivity"
                      >
                        Prejuízo Acumulado*
                      </label>
                      <input
                        type="text"
                        id="LossRuralActivity"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-12 m-auto checkbox-input">
                      <input type="checkbox" name="checkbox1" id="checkbox1" />
                      <label htmlFor="checkbox1">
                        Selecione se é referente a propriedades comuns do casal
                      </label>
                    </div>
                    <div className="col-sm-12 m-auto checkbox-input">
                      <input type="checkbox" name="checkbox2" id="checkbox2" />
                      <label htmlFor="checkbox2">
                        Selecione se é referente ao exterior
                      </label>
                    </div>
                  </div>

                  <div className="col-sm-12 plus-icon">
                    <i className="fal fa-minus"></i>
                    Excluir receitas e despesas
                  </div>
                  <div className="col-sm-12 plus-icon">
                    <i className="fal fa-plus add_more_incluir"></i>Incluir mais
                    receitas e despesas
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/arrecadacao/prejuizo-atividade-rural');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/arrecadacao/resgate-previdencia');
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
