/* eslint-disable react/prop-types */
import React from 'react';
import ProgressBar from '../core-layout/progress-bar';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ActionName } from '../../../state/store';
import RequiredInput from '../../required-input';
import { Person } from '../../../typing';
import BottomNavegation from '../../bottom-navegation';
import isBlank from '../../../utils/blank';
import { AuthenticatedProps } from '../../../typing';
import { saveDeclarant } from '../../../state/graphql/declarant';
import Dependant from './dependant';

function validate(declarant: Person): boolean {
  if (isBlank(declarant.name)) return false;

  return true;
}

export default function FieldsetFamilyNucleous({
  session,
}: AuthenticatedProps) {
  const dispatch = useDispatch();
  const partner = useSelector((state) => state.declarant.partner);
  const dependants = useSelector((state) => state.declarant.dependants);

  return (
    <div className="card card1">
      <div className="row justify-content-center my-auto">
        <div className="col-lg-8 my-5 text-center nucelo-full">
          <form id="msform">
            <ProgressBar percent={0} />
            <fieldset>
              <h3>
                <FormattedMessage id="new-layout.personal-form.fieldset-family-nucleous.fieldset-family-nucleous.title" />
              </h3>

              <p className="text-muted">
                <FormattedMessage id="new-layout.personal-form.fieldset-family-nucleous.fieldset-family-nucleous.description" />
              </p>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12 m-auto">
                    <label className="form-control-placeholder" htmlFor="name">
                      <FormattedMessage id="name.or.nickname" />*
                    </label>
                    <RequiredInput
                      name="fullname"
                      type="text"
                      id="name1"
                      className="form-control"
                      placeholder="Nome ou Apelido"
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

                  <div className="col-sm-12 m-auto">
                    <p className="text-muted">
                      <FormattedMessage id="new-layout.personal-form.fieldset-family-nucleous.fieldset-family-nucleous.long-description" />
                    </p>
                  </div>
                  {partner && (
                    <Dependant
                      isPartner={true}
                      key={partner.uuid}
                      dependant={partner}
                      session={session}
                    />
                  )}
                  {dependants &&
                    dependants.map((dependant) => (
                      <Dependant
                        isPartner={false}
                        key={dependant.uuid}
                        dependant={dependant}
                        session={session}
                      />
                    ))}

                  <div
                    className="col-sm-12 plus-icon"
                    onClick={() => dispatch({ type: ActionName.AddDependant })}
                  >
                    <i className="fal fa-plus add_more_incluir"></i>
                    <FormattedMessage id="family.member.include" />
                  </div>
                </div>
              </div>

              <BottomNavegation
                session={session}
                previous="/2021/inicio"
                next="/2021/arrecadacao"
                value={useSelector((state) => state.declarant)}
                validation={validate}
                save={() => {
                  dispatch(saveDeclarant(session));
                }}
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
