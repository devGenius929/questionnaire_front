import * as React from 'react';
import { useRouter } from 'next/router';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import SelectCountry from '../../core-layout/select-country';
import SelectAssetCode from '../../core-layout/select-asset-code';

export default function FieldsetNonRuralProperty() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={80} />
              <fieldset>
                <h3>Bens não rurais</h3>
                <p className="text-muted">
                  Informe aqui os bens e direitos do seu núcleo familiar em
                  2020, excluindo bens financeiros e rurais.
                </p>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="nameReceived"
                        title="Quem recebeu?"
                      >
                        Quem é proprietário do bem?
                      </label>
                      <SelectPerson onChange={(p) => console.log(p)} />
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
                        htmlFor="Country"
                      >
                        País
                      </label>
                      <SelectCountry onChange={() => {}} />
                    </div>

                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="DescriptionAssets"
                      >
                        Descrição do Bem
                      </label>
                      <textarea
                        id="DescriptionAssets"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ValueBeginningYearOfAssets"
                      >
                        Valor no inicio do ano
                      </label>
                      <input
                        type="text"
                        id="ValueBeginningYearOfAssets"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="ValueEndYearOfAssets"
                      >
                        Valor no final do ano
                      </label>
                      <input
                        type="text"
                        id="ValueEndYearOfAssets"
                        className="form-control"
                        placeholder="R$"
                      />
                    </div>
                    <div className="col-sm-12 m-auto checkbox-input">
                      <input type="checkbox" name="checkbox1" id="checkbox1" />
                      <label htmlFor="checkbox1">
                        Selecione se rendimento veio do exterior
                      </label>
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
                    router.push('/2021/meus-bens');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens/bens-rurais');
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
