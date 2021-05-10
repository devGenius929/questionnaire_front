import * as React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import { useRouter } from 'next/router';
import SelectPerson from '../../../select-person';

export default function FieldsetOficialWelfareExpenses() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={40} />
              <fieldset>
                <h3>Previdencia Oficial</h3>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem Contribuiu?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="January"
                      >
                        Janeiro
                      </label>
                      <input
                        type="text"
                        id="January"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="February"
                      >
                        Fevereiro
                      </label>
                      <input
                        type="text"
                        id="February"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="March"
                      >
                        Março
                      </label>
                      <input
                        type="text"
                        id="March"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="April"
                      >
                        Abril
                      </label>
                      <input
                        type="text"
                        id="April"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label className="form-control-placeholder" htmlFor="May">
                        Maio
                      </label>
                      <input
                        type="text"
                        id="May"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="June"
                      >
                        Junho
                      </label>
                      <input
                        type="text"
                        id="June"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="July"
                      >
                        Julho
                      </label>
                      <input
                        type="text"
                        id="July"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="August"
                      >
                        Agosto
                      </label>
                      <input
                        type="text"
                        id="August"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="September"
                      >
                        Setembro
                      </label>
                      <input
                        type="text"
                        id="September"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="October"
                      >
                        Outubro
                      </label>
                      <input
                        type="text"
                        id="October"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="November"
                      >
                        Novembro
                      </label>
                      <input
                        type="text"
                        id="November"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="December"
                      >
                        Dezembro
                      </label>
                      <input
                        type="text"
                        id="December"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir último recebimento de pessoa jurídica
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      novo recebimento de pessoa jurídica
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas/educacao');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas/previdencia-privada');
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
