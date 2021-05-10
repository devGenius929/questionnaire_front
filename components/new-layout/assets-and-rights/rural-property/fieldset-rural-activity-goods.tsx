import * as React from 'react';

import { useRouter } from 'next/router';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import SelectAssetCode from '../../core-layout/select-asset-code';
import SelectCountry from '../../core-layout/select-country';

export default function FieldsetRuralActivityGoods() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={80} />
              <fieldset>
                <h3>Bens rurais - Bens da Atividade Rural</h3>
                <p className="text-muted">
                  Informe aqui as propriedades rurais, os bens rurais e os
                  rebanhos de seu núcleo familiar em 2020.
                </p>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem explorou a propriedade?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CodProperty"
                      >
                        Codigo do Bem
                      </label>
                      <SelectAssetCode onChange={() => {}} />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CodProperty"
                      >
                        País
                      </label>
                      <SelectCountry onChange={() => {}} />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="DescriptionAssets"
                      >
                        Valor do Bem
                      </label>
                      <input
                        type="text"
                        id="DescriptionAssets"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="DescriptionAssets"
                      >
                        Descrição
                      </label>
                      <textarea
                        id="DescriptionAssets"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>

                    <div className="col-sm-12 m-auto checkbox-input">
                      <input type="checkbox" name="checkbox1" id="checkbox1" />
                      <label htmlFor="checkbox1">
                        Selecione se é bem comum do casal
                      </label>
                    </div>
                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir último bem de atividade rural
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      novo bem de atividade rural
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens/bens-rurais');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens/rebanhos');
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
