import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import SelectRelationship from '../../select-relationship';
import RequiredField from '../../required-input';
import { Dependant, Session } from '../../../typing';
import { ActionName } from '../../../state/store';
import { saveDeclarant } from '../../../state/graphql/declarant';

interface DependantArgs {
  dependant: Dependant;
  isPartner: boolean;
  session: Session;
}
export default function DependantComponent({
  dependant,
  isPartner,
  session,
}: DependantArgs) {
  const dispatch = useDispatch();
  const intl = useIntl();

  return (
    <>
      <div className="col-sm-4 m-auto search-input">
        <label className="form-control-placeholder" htmlFor="NickName">
          <FormattedMessage id="name.or.nickname" />
        </label>
        <RequiredField
          id="NickName"
          name="dependant-name"
          className="form-control dependant-nickname"
          placeholder={intl.formatMessage({ id: 'name.or.nickname' })}
          value={dependant.nickName}
          onChange={(e) => {
            dispatch({
              type: isPartner
                ? ActionName.UpdatePartner
                : ActionName.UpdateDependant,
              payload: {
                ...dependant,
                nickName: e.target.value,
              },
            });
          }}
        />
      </div>
      <div className="col-sm-8 search-input">
        <label
          className="form-control-placeholder"
          htmlFor="ValueEndYearOfDebt"
        >
          <FormattedMessage id="new-layout.personal-form.fieldset-family-nucleous.fieldset-family-nucleous.relationship" />
        </label>
        <SelectRelationship
          className="search_select"
          value={dependant.relationship}
          onChange={(op, isPartner) => {
            dispatch({
              type: isPartner
                ? ActionName.UpdatePartner
                : ActionName.UpdateDependant,
              payload: {
                uuid: dependant.uuid,
                relationship: op.value,
              },
            });
          }}
        />
      </div>
      <div
        className="col-sm-12 plus-icon"
        onClick={() => {
          if (isPartner) {
            dispatch({
              type: ActionName.RemovePartner,
              payload: {},
            });
          }
        }}
      >
        <i className="fal fa-minus"></i>
        <FormattedMessage id="family.member.exclude" />
      </div>
    </>
  );
}
