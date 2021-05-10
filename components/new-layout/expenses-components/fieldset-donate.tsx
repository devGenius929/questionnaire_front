import * as React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import SelectPerson from '../../select-person';

export default function FieldsetDonateExpenses() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={40} />
              <fieldset>
                <h3>Doações</h3>
                <p className="text-muted">
                  Gastos de doação com incentivo do IRPF
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Quem fez a doação?
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
                        Nome do beneficiário*
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Nome do beneficiário*"
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
                        Categoria da ação
                      </label>
                      <select
                        className=" form-control search_select input-edited"
                        required
                      >
                        <option value="Bakaus">Bakaus</option>
                        <option value="Dependente 1">Dependente 1</option>
                        <option value="Conjuge">Conjuge</option>
                      </select>
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="name"
                      >
                        Valor da Doação
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
                        Parte não dedutível
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir última doação
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      nova doação
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous"
                  data-img="images/man-right.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas/pensao-alimenticia');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step7.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas/imposto-de-renda');
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
