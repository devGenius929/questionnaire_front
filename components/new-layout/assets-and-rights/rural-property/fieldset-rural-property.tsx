import * as React from 'react';

import { useRouter } from 'next/router';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import SelectCountry from '../../core-layout/select-country';

export default function FieldsetRuralProperty() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={80} />
              <fieldset>
                <h3>Bens rurais - Propriedades Rurais</h3>
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

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="NameProperty"
                      >
                        Nome do Imóvel explorado
                      </label>
                      <br />

                      <input
                        type="text"
                        id="NameProperty"
                        className="form-control"
                        placeholder="Nome do Imóvel"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CountryAssets"
                      >
                        Pais
                      </label>

                      <SelectCountry onChange={(o) => {}} />
                    </div>

                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="DescriptionAssets"
                      >
                        Descrição da localização
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
                        Atividade realizada
                      </label>
                      <select
                        id="campo-1145"
                        className="form-control search_select input-edited"
                        name="campo-1145"
                      >
                        <option value="7141">
                          Agricultura - cultura do solo, independentemente do
                          produto cultivado.
                        </option>
                        <option value="7142">
                          Pecuária - criação, recriação ou engorda de animais de
                          médio e grande porte.
                        </option>
                        <option value="7143">
                          Extração e exploração vegetal e animal.
                        </option>
                        <option value="7144">
                          Exploração da apicultura, avicultura, cunicultura,
                          piscicultura, sericultura, suinocultura etc.
                        </option>
                        <option value="7145">
                          Cultura de pequenos animais.
                        </option>
                        <option value="7146">
                          Captura e venda do pescado in natura.
                        </option>
                        <option value="7147">
                          Transformação de produtos agrícolas ou pecuários.
                        </option>
                        <option value="7148">Cultivo de florestas.</option>
                        <option value="7149">Outras</option>
                      </select>
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="TypeProperty"
                      >
                        Tipo de Propriedade
                      </label>
                      <select
                        id="campo-1146"
                        className="form-control search_select input-edited"
                        name="campo-1146"
                      >
                        <option value="">Selecione</option>
                        <option value="7150">
                          Propriedade Única ou Posse.
                        </option>
                        <option value="7151">Condomínio.</option>
                        <option value="7152">Parceria.</option>
                        <option value="7153">Arrendamento.</option>
                        <option value="7154">
                          Propriedade comum ao casal.
                        </option>
                        <option value="7155">Outras</option>
                      </select>
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Participation"
                      >
                        Participação
                      </label>
                      <input
                        type="text"
                        id="Participation"
                        className="form-control"
                        placeholder="%"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="AreaProperty"
                      >
                        Area da propriedade
                      </label>
                      <input
                        type="text"
                        id="AreaProperty"
                        className="form-control"
                        placeholder="Hectares"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="NITFProperty"
                      >
                        NIRF
                      </label>
                      <input
                        type="text"
                        id="NITFProperty"
                        className="form-control"
                        placeholder="NIRF"
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir última propriedade rural
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      nova propriedade rural
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-gray previous "
                  data-img="images/undraw_Balloons.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens/bens-nao-rurais');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens/bens-atividade-rural');
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
