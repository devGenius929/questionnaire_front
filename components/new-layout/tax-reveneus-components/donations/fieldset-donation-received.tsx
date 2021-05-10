import * as React from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import MaskedInput from '../../../masked-input';

export default function FieldsetDonationsReceived() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>Doações - Recebida em Dinheiro</h3>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem foi beneficiado?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="PayingSource"
                      >
                        Doador
                      </label>
                      <input
                        type="text"
                        id="PayingSource"
                        className="form-control"
                        placeholder="Nome Fonte Pagadora"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CNPJ"
                      >
                        CNPJ/CPF
                      </label>
                      <MaskedInput
                        id="CNPJCPF"
                        mask="99.999.999/9999-99"
                        name="CNPJCPF"
                        className="form-control"
                        value=""
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="GrossIncome"
                      >
                        Total Recebido
                      </label>
                      <input
                        type="text"
                        id="GrossIncome"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 plus-icon">
                    <i className="fal fa-minus"></i>
                    Excluir última doação recebida
                  </div>
                  <div className="col-sm-12 plus-icon">
                    <i className="fal fa-plus add_more_incluir"></i>Incluir nova
                    doação recebida
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/arrecadacao/rendimentos-com-imposto');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/arrecadacao/doacoes-bens');
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
