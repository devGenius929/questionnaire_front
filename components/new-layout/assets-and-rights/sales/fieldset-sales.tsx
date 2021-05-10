import * as React from 'react';

import { useRouter } from 'next/router';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import SelectAssetCode from '../../core-layout/select-asset-code';
import SelectCountry from '../../core-layout/select-country';

export default function FieldsetSales() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={80} />
              <fieldset>
                <h3>Vendas</h3>
                <p className="text-muted">
                  Informe neste formulário as vendas ISENTAS de IR (sem o uso do
                  GCAP) de sua família em 2011.
                </p>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem é vendeu?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CodAssets"
                      >
                        Código do bem*
                      </label>
                      <SelectAssetCode onChange={() => {}} />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CodAssets"
                      >
                        País
                      </label>
                      <SelectCountry onChange={() => {}} />
                    </div>

                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Description"
                      >
                        Por que a venda é ISENTA de IRPF?
                      </label>
                      <select
                        id="campo-1031"
                        className="form-control search_select input-edited "
                        name="campo-1031"
                      >
                        <option value="6323">Venda até R$35.000</option>
                        <option value="6324">
                          Venda de um único imóvel até 440.000
                        </option>
                        <option value="6325">
                          Venda seguida de compra de imóvel em 180 dias
                        </option>
                        <option value="6326">
                          Venda de moeda estrangeira até U$5.000 no ano
                        </option>
                      </select>
                    </div>

                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Description"
                      >
                        Descrição do Bem
                      </label>
                      <textarea
                        id="Description"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="IdSeller"
                      >
                        Comprador
                      </label>
                      <input
                        type="text"
                        id="IdSeller"
                        className="form-control"
                        placeholder="Comprador"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="IdBuyer"
                      >
                        CPF/CNPJ
                      </label>
                      <input
                        type="text"
                        id="IdBuyer"
                        className="form-control"
                        placeholder="CPF/CNPJ"
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ValueBeginningOfYear"
                      >
                        Valor início do ano
                      </label>
                      <input
                        type="text"
                        id="ValueBeginningOfYear"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="AcquisitionCost"
                      >
                        Custo de aquisição
                      </label>
                      <input
                        type="text"
                        id="AcquisitionCost"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>

                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="SellPrice"
                      >
                        Valor da venda
                      </label>
                      <input
                        type="text"
                        id="SellPrice"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>
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
                    router.push('/2021/meus-bens/compras');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/resultado');
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
