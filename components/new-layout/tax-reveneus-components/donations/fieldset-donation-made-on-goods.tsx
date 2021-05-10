import * as React from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import SelectAssetCode from '../../core-layout/select-asset-code';
import SelectCountry from '../../core-layout/select-country';
import MaskedInput from '../../../masked-input';

export default function FieldsetDonateMadeOnGoods() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={20} />
              <fieldset>
                <h3>Doações - Realizadas em Bens</h3>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem doou?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Description"
                      >
                        Código do Bem
                      </label>
                      <SelectAssetCode onChange={(o) => {}} />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Description"
                      >
                        País
                      </label>
                      <SelectCountry onChange={(o) => {}} />
                    </div>
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Description"
                      >
                        Descrição do bem
                      </label>
                      <textarea
                        id="Description"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="donate"
                      >
                        Favorecido
                      </label>
                      <input
                        type="text"
                        id="donate"
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
                        htmlFor="Value"
                      >
                        Valor no inicio do ano
                      </label>
                      <input
                        type="text"
                        id="Value"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="donate"
                      >
                        Custo de Aquisição
                      </label>
                      <input
                        type="text"
                        id="donate"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="donate"
                      >
                        Valor da doação
                      </label>
                      <input
                        type="text"
                        id="donate"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 plus-icon">
                    <i className="fal fa-minus"></i>
                    Excluir última doação realizada
                  </div>
                  <div className="col-sm-12 plus-icon">
                    <i className="fal fa-plus add_more_incluir"></i>Incluir nova
                    doação realizada
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/arrecadacao/doacoes-realizadas');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/despesas');
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
