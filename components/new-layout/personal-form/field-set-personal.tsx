/* eslint-disable react/prop-types */
import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ActionName } from '../../../state/store';
import RequiredInput from '../../required-input';
import MaskedInput from '../../masked-input';
import { validateBr } from 'js-brasil';
import { Person, AuthenticatedProps } from '../../../typing';
import BottomNavegation from '../../bottom-navegation';
import isBlank from '../../../utils/blank';
import { saveDeclarant } from '../../../state/graphql/declarant';

function validate(declarant: Person): boolean {
  if (isBlank(declarant.cpf) || !validateBr.cpf(declarant.cpf)) return false;
  if (isBlank(declarant.name)) return false;
  if (declarant.dateOfBirth >= new Date()) return false;

  return true;
}

export default function FieldsetPersonalData({ session }: AuthenticatedProps) {
  const dispatch = useDispatch();
  const intl = useIntl();
  const partner: Person = useSelector((state) => state.partner);

  return (
    <div className="card card1">
      <div className="row justify-content-center my-auto">
        <div className="col-lg-8 my-5 text-center nucelo-full">
          <form id="msform">
            <ProgressBar percent={0} />
            <fieldset>
              <h3>
                <FormattedMessage id="new-layout.personal-form.field-set-personal.title" />
              </h3>

              <p className="text-muted">
                <FormattedMessage id="new-layout.personal-form.field-set-personal.sub-title" />
              </p>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.name" />
                      *
                    </label>
                    <RequiredInput
                      name="fullname"
                      type="text"
                      id="name1"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: 'new-layout.personal-form.field-set.personal.name',
                      })}
                      value={useSelector((state) => state.declarant.name)}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarant,
                          payload: {
                            name: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>

                  <div className="col-4 m-auto">
                    <label
                      className="form-control-placeholder"
                      htmlFor="CPFUser"
                    >
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.cpf" />
                      *
                    </label>
                    <RequiredInput
                      id="CPFUser"
                      mask="999.999.999-99"
                      name="CPFUser"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id: 'new-layout.personal-form.field-set.personal.cpf',
                      })}
                      value={useSelector((state) => state.declarant.cpf)}
                      validation={(v) => v && validateBr.cpf(v)}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarant,
                          payload: {
                            cpf: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>

                  <div className="col-4 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.birthday" />
                      *
                    </label>
                    <RequiredInput
                      name="birthday"
                      type="date"
                      id="name3"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id:
                          'new-layout.personal-form.field-set.personal.birthday',
                      })}
                      value={useSelector((state) => state.declarant.birthday)}
                      validation={(v) => {
                        const today = new Date();
                        const birthday = new Date(v);
                        if (birthday > today) return false;
                        return true;
                      }}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarant,
                          payload: {
                            dateOfBirth: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>

                  <div className="col-4 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.voter-registration" />
                      *
                    </label>
                    <RequiredInput
                      name="voterRegistration"
                      type="text"
                      id="name4"
                      mask="9999.9999.9999"
                      className="form-control"
                      validation={(v) => validateBr.titulo(v)}
                      placeholder={intl.formatMessage({
                        id:
                          'new-layout.personal-form.field-set.personal.voter-registration.placeholder',
                      })}
                      value={useSelector(
                        (state) => state.declarant.voterRegistration,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarant,
                          payload: {
                            voterRegistration: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.email" />
                      *
                    </label>
                    <RequiredInput
                      name="email"
                      type="text"
                      id="name5"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id:
                          'new-layout.personal-form.field-set.personal.email.placeholder',
                      })}
                      value={useSelector((state) => state.declarant.email)}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarant,
                          payload: {
                            email: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-sm-2 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.ddd" />
                    </label>
                    <RequiredInput
                      name="ddd"
                      type="text"
                      id="name6"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id:
                          'new-layout.personal-form.field-set.personal.ddd.placeholder',
                      })}
                      mask="99"
                      value={useSelector(
                        (state) => state.declarant.telephone?.ddd,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantTelephone,
                          payload: {
                            ddd: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-sm-4 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.phone" />
                    </label>
                    <RequiredInput
                      name="phoneNumber"
                      type="text"
                      id="name6"
                      className="form-control"
                      placeholder="Telefone"
                      mask="99999-9999"
                      value={useSelector(
                        (state) => state.declarant.telephone?.phoneNumber,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantTelephone,
                          payload: {
                            phoneNumber: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>

                  <div className="col-sm-2 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.mobile.ddd" />
                    </label>
                    <RequiredInput
                      name="mobileDDD"
                      type="text"
                      id="name6"
                      className="form-control"
                      placeholder={intl.formatMessage({
                        id:
                          'new-layout.personal-form.field-set.personal.ddd.placeholder',
                      })}
                      mask="99"
                      value={useSelector(
                        (state) => state.declarant.mobile?.ddd,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantMobile,
                          payload: {
                            ddd: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-sm-4 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.mobile" />
                    </label>
                    <RequiredInput
                      name="mobile"
                      type="text"
                      id="name6"
                      className="form-control"
                      mask="99999-9999"
                      placeholder={intl.formatMessage({
                        id:
                          'new-layout.personal-form.field-set.personal.mobile',
                      })}
                      value={useSelector(
                        (state) => state.declarant.mobile?.phoneNumber,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclarantMobile,
                          payload: {
                            phoneNumber: e.target.value,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="col-6 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.partner.cpf" />
                    </label>
                    {partner && (
                      <RequiredInput
                        name="partnerCpf"
                        mask="999.999.999-99"
                        type="text"
                        id="name6"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.field-set.personal.partner.cpf.placeholder',
                        })}
                        value={useSelector((state) => state.partner?.cpf)}
                        validation={(v) => v && validateBr.cpf(v)}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              cpf: e.target.value,
                            },
                          });
                        }}
                      />
                    )}
                    {!partner && (
                      <MaskedInput
                        name="partnerCpf"
                        mask="999.999.999-99"
                        type="text"
                        id="name6"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.field-set.personal.partner.cpf.placeholder',
                        })}
                        value={useSelector((state) => state.partner?.cpf)}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              cpf: e.target.value,
                            },
                          });
                        }}
                      />
                    )}
                  </div>

                  <div className="col-sm-6 m-auto checkbox-input">
                    <input
                      type="checkbox"
                      name="checkbox1"
                      id="checkbox1"
                      value={useSelector(
                        (state) => state.declaration.hasDisabled,
                      )}
                      onChange={(e) => {
                        dispatch({
                          type: ActionName.UpdateDeclaration,
                          payload: {
                            hasDisabled: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label htmlFor="checkbox1">
                      <FormattedMessage id="new-layout.personal-form.field-set.personal.disability" />
                    </label>
                  </div>
                </div>
              </div>

              <BottomNavegation
                session={session}
                previous="/2021/inicio"
                next="/2021/nucleo/endereco"
                value={useSelector((state) => state.declarant)}
                validation={validate}
                save={() => dispatch(saveDeclarant(session))}
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
