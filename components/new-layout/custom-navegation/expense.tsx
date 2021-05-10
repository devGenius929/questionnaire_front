import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import Select from 'react-select';
import { NavegationOption } from '../../../typing/option-navegation';
import CustomNavegationItem from './expense-item';
import { useDispatch } from 'react-redux';
import { ActionName } from '../../../state/store';
import { v4 as uuid } from 'uuid';

interface ExpenseNavegationArg {
  expenseOptions: NavegationOption[];
}

export default function ExpenseNavegation({
  expenseOptions,
}: ExpenseNavegationArg) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const optionsWithLabels = expenseOptions.map((o) => ({
    value: o,
    label: intl.formatMessage({ id: o.id }),
  }));

  return (
    <div className="form-group">
      <div className="row">
        <div className="col-sm-12 custom-search">
          <ul>
            {expenseOptions.map((o) => (
              <CustomNavegationItem key={uuid()} expenseOption={o} />
            ))}
          </ul>
        </div>

        <div className="col-sm-12 search-input">
          <Select
            options={optionsWithLabels}
            onChange={(o) => {
              dispatch({
                type: ActionName.UpdateExpenseNavegationOption,
                payload: {
                  ...o.value,
                  activated: true,
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
