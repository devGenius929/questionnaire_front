import React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import RequiredInput from '../../../required-input';
import { useSelector, useDispatch } from 'react-redux';
import { validateBr } from 'js-brasil';
import { ActionName } from '../../../../state/store';
import { Person } from '../../../../typing';
import MaskedInput from '../../../masked-input';

export default function FieldsetPartnerData() {
  const router = useRouter();
  const dispatch = useDispatch();
  const intl = useIntl();
  const partner: Person = useSelector((state) => state.partner);
  return (
    <>
      <div className="card card1">
        <div className="row justify-content-center my-auto">
          <div className="col-lg-8 my-5 text-center nucelo-full">
            <form id="msform">
              <ProgressBar percent={0} />
              <br />
              <fieldset>
                <h3>
                  <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.title" />
                </h3>

                <p className="text-muted">
                  <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.subtitle" />
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="NamePartner"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.full-name-partner" />
                        *
                      </label>
                      <RequiredInput
                        type="text"
                        id="NamePartner"
                        className="form-control"
                        name="NamePartner"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-partner-data.full-name-partner.placeholder',
                        })}
                        value={''}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              firstName: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="CPFPartner"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.cpf-partner" />
                        *
                      </label>
                      {partner && (
                        <RequiredInput
                          type="text"
                          id="CPFPartner"
                          mask="999.999.999-99"
                          name="CPFPartner"
                          className="form-control"
                          placeholder={intl.formatMessage({
                            id:
                              'new-layout.personal-form.forms-dependants.fieldset-partner-data.cpf-partner',
                          })}
                          value={useSelector((state) => state.partner.cpf)}
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
                              'new-layout.personal-form.forms-dependants.fieldset-partner-data.cpf-partner',
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
                    <div className="col-sm-4   m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="BirthdayPartner"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.birthday-partner" />
                      </label>
                      <RequiredInput
                        id="BirthdayPartner"
                        className="form-control"
                        name="BirthdayPartner"
                        type="text"
                        mask="99/99/9999"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-partner-data.birthday-partner.placeholder',
                        })}
                        value={useSelector((state) => state.partner?.birthday)}
                        validation={(v) => {
                          const today = new Date();
                          const birthday = new Date(v);
                          if (birthday > today) return false;
                          return true;
                        }}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              dateOfBirth: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>

                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="VoterRegistration"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.voter-registration" />
                      </label>
                      <RequiredInput
                        type="text"
                        id="VoterRegistration"
                        name="VoterRegistration"
                        mask="9999.9999.9999"
                        className="form-control"
                        validation={(v) => validateBr.titulo(v)}
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-partner-data.voter-registration.placeholder',
                        })}
                        value={useSelector(
                          (state) => state.partner?.voterRegistration,
                        )}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              voterRegistration: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm-12 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="EmailPartner"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.email-partner" />
                      </label>
                      <RequiredInput
                        type="text"
                        id="EmailPartner"
                        name="EmailPartner"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-partner-data.email-partner.placeholder',
                        })}
                        value={useSelector((state) => state.partner?.email)}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              email: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm-3 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="DDDPartner"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.ddd-partner" />
                      </label>
                      <RequiredInput
                        type="text"
                        id="DDDPartner"
                        name="DDDPartner"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-partner-data.ddd-partner.placeholder',
                        })}
                        mask="99"
                        value={useSelector(
                          (state) => state.partner?.telephone?.ddd,
                        )}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              ddd: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm-3 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="PhonePartner"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.phone-partner" />
                      </label>
                      <RequiredInput
                        type="text"
                        id="PhonePartner"
                        className="form-control"
                        name="PhonePartner"
                        mask="99999-9999"
                        placeholder="Telefone"
                        value={useSelector(
                          (state) => state.partner?.telephone?.phoneNumber,
                        )}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartnerTelephone,
                            payload: {
                              phoneNumber: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm-3 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="DDDMobile"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.ddd-mobile" />
                      </label>
                      <RequiredInput
                        type="text"
                        id="DDDMobile"
                        name="DDDMobile"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-partner-data.ddd-mobile.placeholder',
                        })}
                        mask="99"
                        value={useSelector(
                          (state) => state.partner?.mobile?.ddd,
                        )}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartner,
                            payload: {
                              ddd: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="col-sm-3 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="MobilePartner"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-partner-data.mobile-partner" />
                      </label>
                      <RequiredInput
                        type="text"
                        id="MobilePartner"
                        name="MobilePartner"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-partner-data.mobile-partner',
                        })}
                        mask="99999-9999"
                        value={useSelector(
                          (state) => state.partner?.mobile?.ddd,
                        )}
                        onChange={(e) => {
                          dispatch({
                            type: ActionName.UpdatePartnerMobile,
                            payload: {
                              mobile: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dependentes');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/man-right.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dados-dependentes');
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
