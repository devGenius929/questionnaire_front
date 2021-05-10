import React from 'react';
import ProgressBar from '../../core-layout/progress-bar';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import RequiredInput from '../../../required-input';
import { useSelector, useDispatch } from 'react-redux';
import { ActionName } from '../../../../state/store';
import MaskedInput from '../../../masked-input';
import { validateBr } from 'js-brasil';
import { Person } from '../../../../typing';

export default function FieldsetPensionBeneficary() {
  const router = useRouter();
  const dispatch = useDispatch();
  const intl = useIntl();
  const alimonyDependants: Person = useSelector(
    (state) => state.alimonyDependants,
  );

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
                  <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.title" />
                </h3>

                <p className="text-muted"></p>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-4 m-auto">
                      <label
                        className="form-control-placeholder"
                        htmlFor="NamePensionBeneficiary"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.fullName" />
                        *
                      </label>
                      <RequiredInput
                        type="text"
                        id="NamePensionBeneficiary"
                        name="NamePensionBeneficiary"
                        className="form-control"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.fullName.placeholder',
                        })}
                        value={useSelector(
                          (state) => state.alimonyDependants.firstName,
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
                        htmlFor="BirthdayPensionBeneficiary"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.birthday" />
                      </label>
                      <RequiredInput
                        id="BirthdayPensionBeneficiary"
                        className="form-control"
                        name="BirthdayPensionBeneficiary"
                        type="text"
                        mask="99/99/9999"
                        placeholder={intl.formatMessage({
                          id:
                            'new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.birthday.placeholder',
                        })}
                        value={useSelector(
                          (state) => state.alimonyDependants.birthday,
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
                        htmlFor="CPFPensionBeneficary"
                      >
                        <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.cpf-pension-beneficary" />
                        *
                      </label>
                      {alimonyDependants && (
                        <RequiredInput
                          type="text"
                          id="CPFPensionBeneficary"
                          mask="999.999.999-99"
                          name="CPFPensionBeneficary"
                          className="form-control"
                          placeholder={intl.formatMessage({
                            id:
                              'new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.cpf-pension-beneficary.placeholder',
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
                      {!alimonyDependants && (
                        <MaskedInput
                          name="CPFPensionBeneficary"
                          mask="999.999.999-99"
                          type="text"
                          id="CPFPensionBeneficary"
                          className="form-control"
                          placeholder={intl.formatMessage({
                            id:
                              'new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.cpf-pension-beneficary.placeholder',
                          })}
                          value={useSelector(
                            (state) => state.alimonyDependants?.cpf,
                          )}
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
                    <div className="col-sm-8 col-lg-7 ">
                      <div className="radio">
                        <input id="radio-3" name="Nao" type="radio" />
                        <label htmlFor="radio-3" className="radio-label">
                          <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.option-br" />
                        </label>
                        <input id="radio-4" name="Nao" type="radio" />
                        <label htmlFor="radio-4" className="radio-label">
                          <FormattedMessage id="new-layout.personal-form.forms-dependants.fieldset-pension-beneficiary.option-exterior" />
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-minus"></i>
                      Excluir último alimentando
                    </div>
                    <div className="col-sm-12 plus-icon">
                      <i className="fal fa-plus add_more_incluir"></i>Incluir
                      novo alimentando
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-gray previous"
                  data-img="images/step2.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/nucleo/dados-dependentes');
                  }}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-gray green-bg next"
                  data-img="images/man-right.svg"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/2021/arrecadacao');
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
