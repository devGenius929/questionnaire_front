import * as React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import { useRouter } from 'next/router';
import SelectPerson from '../../../select-person';
import MaskedInput from '../../../masked-input';

export default function FieldsetPrivatePensionExpenses() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={40} />
              <fieldset>
                <h3>Previdencia Privada</h3>

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
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CompanyExpensePrivatePension"
                      >
                        Empresa que recebeu a contribuição*
                      </label>
                      <input
                        type="text"
                        id="CompanyExpensePrivatePension"
                        className="form-control"
                        placeholder="Empresa que recebeu a contribuição"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CompanyCNPJExpensePrivatePension"
                      >
                        CNPJ*
                        <br />
                      </label>
                      <MaskedInput
                        id="CNPJ"
                        mask="99.999.999/9999-99"
                        name="CNPJ"
                        className="form-control"
                        value=""
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="TypeAplication"
                      >
                        Tipo de Aplicação
                      </label>
                      <select
                        className=" form-control search_select input-edited"
                        required
                      >
                        <option value="Previdencia Privada/ PGBL">
                          Previdencia Privada/ PGBL
                        </option>
                        <option value="FAPI">FAPI</option>
                      </select>
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="PaidValue"
                      >
                        Valor Pago
                      </label>
                      <input
                        type="text"
                        id="PaidValue"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ParteNaoDedutivel"
                      >
                        Parte não dedutível
                      </label>
                      <input
                        type="text"
                        id="PaidValue"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir última despesa de previdência privada
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      nova despesa de previdência privada
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas/previdencia-oficial');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas/pensao-alimenticia-direta');
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
