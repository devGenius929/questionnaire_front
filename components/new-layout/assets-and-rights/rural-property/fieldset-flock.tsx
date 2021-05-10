import * as React from 'react';

import { useRouter } from 'next/router';
import ProgressBar from '../../core-layout/progress-bar';
import SelectPerson from '../../../select-person';
import SelectCountry from '../../core-layout/select-country';

export default function FieldsetFlock() {
  const router = useRouter();
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={80} />
              <fieldset>
                <h3>Bens rurais - Rebanhos</h3>
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
                        Quem possui o rebanho?
                      </label>
                      <SelectPerson
                        onChange={(person) => console.log(person)}
                      />
                    </div>

                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Country"
                      >
                        País
                      </label>
                      <SelectCountry onChange={() => {}} />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="TypeFlock"
                      >
                        Espécie
                      </label>
                      <select
                        id="campo-1163"
                        className="form-control search_select input-edited"
                        name="campo-1163"
                      >
                        <option value="7163">Bovinos e Bufalinos.</option>
                        <option value="7164">Suínos</option>
                        <option value="7165">Caprinos e Ovinos</option>
                        <option value="7166">Asininos, Equínos e Muares</option>
                        <option value="7167">Outros</option>
                      </select>
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="UnitInicial"
                      >
                        Numero Inicial
                      </label>
                      <input
                        type="text"
                        id="UnitInicial"
                        className="form-control"
                        placeholder="Unidades"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="Acquisitions "
                      >
                        Aquisições
                      </label>
                      <input
                        type="text"
                        id="Acquisitions "
                        className="form-control"
                        placeholder="Unidades"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="UnitsBorn"
                      >
                        Nascimentos
                      </label>
                      <input
                        type="text"
                        id="UnitsBorn"
                        className="form-control"
                        placeholder="Unidades"
                      />
                    </div>

                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="LossUnits"
                      >
                        Consumo ou Perdas
                      </label>
                      <input
                        type="text"
                        id="LossUnits"
                        className="form-control"
                        placeholder="Unidades"
                      />
                    </div>
                    <div className="col-sm-6 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="UnitSales"
                      >
                        Vendas
                      </label>
                      <input
                        type="text"
                        id="UnitSales"
                        className="form-control"
                        placeholder="Unidades"
                      />
                    </div>
                    <div className="col-sm-6 m-auto"></div>

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
                    router.push('/2021/meus-bens/bens-atividade-rural');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/meus-bens/compras');
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
