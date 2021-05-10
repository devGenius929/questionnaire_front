import React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import RequiredInput from '../../../required-input';
import { useDispatch, useSelector } from 'react-redux';
import { Person } from '../../../../typing';
import { ActionName } from '../../../../state/store';
import MaskedInput from '../../../masked-input';
import { validateBr } from 'js-brasil';

export default function FieldsetDependantsData() {
  const router = useRouter();
  const dispatch = useDispatch();
  const intl = useIntl();
  const dependant: Person = useSelector((state) => state.depenants);
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
                  <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-dependants-data.title" />
                </h3>

                <p className="text-muted">
                  <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-dependants-data.subtitle" />
                </p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="NameDependant"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-dependants-data.full-name-dependant" />
                        *
                      </label>
                      <RequiredInput
                        type="text"
                        id="NameDependant"
                        name="NameDependant"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-dependants-data.full-name-dependant',
                        })}
                        value={useSelector(
                          (state) => state.declarant.dependants.firstName,
                        )}
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
                        htmlFor="BirthdayDependant"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-dependants-data.birthday-dependant" />
                      </label>
                      <RequiredInput
                        id="BirthdayDependant"
                        className="form-control"
                        name="BirthdayDependant"
                        type="text"
                        mask="99/99/9999"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-dependants-data.birthday-dependant.placehoder',
                        })}
                        value={useSelector(
                          (state) => state.declarant.dependants.birthday,
                        )}
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
                        htmlFor="name"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-dependants-data.cpf-dependant" />
                        *
                      </label>
                      {dependant && (
                        <RequiredInput
                          type="text"
                          id="CPFDependant"
                          mask="999.999.999-99"
                          name="CPFDependant"
                          className="form-control"
                          placeholder={intl.formatMessage({
                            id:
                              'new-layout.personal-form.forms-dependants.fieldset-dependants-data.cpf-dependant.placeholder',
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
                      {!dependant && (
                        <MaskedInput
                          name="partnerCpf"
                          mask="999.999.999-99"
                          type="text"
                          id="name6"
                          className="form-control"
                          placeholder={intl.formatMessage({
                            id:
                              'new-layout.personal-form.forms-dependants.fieldset-dependants-data.cpf-dependant.placeholder',
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
                    <div className="col-sm-6 m-auto"></div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir último dependente
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      novo dependente
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dados-conjuge');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/man-right.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dados-alimentando');
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
