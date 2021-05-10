import * as React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import SelectPerson from '../../select-person';

export default function FieldsetEducationExpenses() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar />
              <fieldset>
                <h3>Educação</h3>
                <p className="text-muted">
                  Informe aqui as despesas com educação do seu nucleo familiar
                  este ano.
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Quem foi beneficiado?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Nome Prestador de Serviço*
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Nome Prestador Serviço"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        CPF/CNPJ
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="XX. XXX. XXX/0001-XX"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Total pago
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Parte Reembolsada
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>

                    <div className="col-sm-12 m-auto checkbox-input">
                      <input type="checkbox" name="checkbox2" id="checkbox2" />
                      <label htmlFor="checkbox2">
                        Selecione se o gasto foi realizado no exterior
                      </label>
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
                  className="btn btn-gray previous"
                  data-img="images/man-right.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas  ');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step7.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas/previdencia-oficial');
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
