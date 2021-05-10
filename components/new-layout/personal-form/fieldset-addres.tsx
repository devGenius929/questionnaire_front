import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ActionName } from '../../../state/store';
import SelectCountry from '../core-layout/select-country';

export default function FieldsetAddres() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="card card1">
      <div className="row justify-content-center my-auto">
        <div className="col-lg-8 my-5 text-center nucelo-full">
          <form id="msform">
            <ProgressBar percent={0} />
            <fieldset>
              <h3>
                <FormattedMessage id="new-layout.personal-form.field-address.title" />
              </h3>

              <p className="text-muted">
                <FormattedMessage id="new-layout.personal-form.fieldset-address.subtitle" />
              </p>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12 m-auto checkbox-input">
                    <input type="checkbox" name="checkbox1" id="checkbox1" />
                    <label htmlFor="checkbox1">
                      <FormattedMessage id="new-layout.personal-form.fieldset-address.select-address" />
                    </label>
                  </div>
                  <div className="col-sm-6 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="address" />
                    </label>
                    <input
                      type="text"
                      id="name1"
                      className="form-control"
                      required
                      placeholder="Endereco"
                      value={useSelector(
                        (state) => state.declarant.address.street,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantAddress,
                          payload: {
                            street: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>

                  <div className="col-sm-2 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="number" />
                    </label>
                    <input
                      type="text"
                      id="name5"
                      className="form-control"
                      placeholder="Nº"
                      value={useSelector(
                        (state) => state.declarant.address.house,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantAddress,
                          payload: {
                            house: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>

                  <div className="col-sm-4 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="complement" />
                    </label>
                    <input
                      type="text"
                      id="name3"
                      className="form-control"
                      placeholder="Complemento"
                      value={useSelector(
                        (state) => state.declarant.address.complement,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantAddress,
                          payload: {
                            complement: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>

                  <div className="col-sm-6 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="neighbourhood" />
                    </label>
                    <input
                      type="text"
                      id="name2"
                      className="form-control"
                      placeholder="Bairro"
                      value={useSelector(
                        (state) => state.declarant.address.neighbourhood,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantAddress,
                          payload: {
                            neighbourhood: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-sm-6 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="country" />
                    </label>
                    <SelectCountry onChange={() => {}} />
                  </div>

                  <div className="col-sm-6 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="state" />
                    </label>
                    <select
                      className=" form-control search_select input-edited"
                      required
                      value={useSelector(
                        (state) => state.declarant.address.state,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantAddress,
                          payload: {
                            state: e.target.value,
                          },
                        });
                      }}
                    >
                      <option value="Estado 1"> Paraná - PR</option>
                      <option value="Estado 2">Rio de Janeiro - RJ</option>
                      <option value="Estado 3"> Acre - AC</option>
                      <option value="Estado 4"> Estado 1</option>
                      <option value="Estado 5">Estado 2</option>
                      <option value="Estado 6"> Estado 4</option>
                    </select>
                  </div>

                  <div className="col-sm-6 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="city" />
                    </label>
                    <select
                      className=" form-control search_select input-edited"
                      required
                      value={useSelector(
                        (state) => state.declarant.address.city,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantAddress,
                          payload: {
                            city: e.target.value,
                          },
                        });
                      }}
                    >
                      <option value="Cidade 1"> Cidade 1</option>
                      <option value="Cidade 2">Cidade 2</option>
                      <option value="Cidade 3"> Cidade 3</option>
                      <option value="Cidade 4"> Cidade 4</option>
                      <option value="Cidade 5">Cidade 5</option>
                      <option value="Cidade 6">Cidade 6</option>
                    </select>
                  </div>

                  <div className="col-sm-4 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="zip" />
                    </label>
                    <input
                      type="text"
                      id="name3"
                      className="form-control"
                      placeholder="CEP"
                      value={useSelector(
                        (state) => state.declarant.address.zip,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantAddress,
                          payload: {
                            zip: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-sm-8 m-auto"></div>
                </div>
              </div>
              <button
                className="btn btn-gray previous"
                data-img="images/undraw_Balloons.svg"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/2021/nucleo/dados-pessoais');
                }}
              >
                <FormattedMessage id="button.back" />
              </button>
              <button
                className="btn btn-gray green-bg next"
                data-img="images/step2.svg"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/2021/nucleo/ocupacao');
                }}
              >
                <FormattedMessage id="button.continue" />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
