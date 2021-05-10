import * as React from 'react';
import Expenses from './expenses';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import SelectPerson from '../../../../select-person';
import { ActionName } from '../../../../../state/store';
import { Person, ReceivedCash } from '../../../../../typing';

interface Args {
  receivedCash: ReceivedCash;
}

export default function FieldsetAutonomousExpensesItem({ receivedCash }: Args) {
  const dispatch = useDispatch();

  return (
    <div className="form-group">
      <div className="row">
        <div className="col-sm-6 m-auto">
          <label
            className="form-control-placeholder"
            htmlFor="nameReceived"
            title="Quem recebeu?"
          >
            <FormattedMessage id="who.received" />
          </label>
          <SelectPerson
            value={receivedCash.personUuid}
            onChange={(person: Person) => {
              dispatch({
                type: ActionName.UpdateFreelanceCashReceived,
                payload: {
                  uuid: receivedCash.uuid,
                  personUuid: person.uuid,
                },
              });
            }}
          />
        </div>
        <div className="col-sm-6 m-auto"></div>
        <Expenses receivedCash={receivedCash} />
      </div>
    </div>
  );
}
