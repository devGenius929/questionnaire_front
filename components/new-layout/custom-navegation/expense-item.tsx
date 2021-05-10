import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { ActionName } from '../../../state/store';
import { NavegationOption } from '../../../typing/option-navegation';

interface ExpenseNavegationItemArg {
  expenseOption: NavegationOption;
}

function cssClasses(option: NavegationOption): string {
  if (option.activated === true) {
    return 'custome_select_event active';
  }

  return 'custome_select_event';
}

export default function ExpenseNavetationItem({
  expenseOption,
}: ExpenseNavegationItemArg) {
  const dispatch = useDispatch();

  return (
    <li
      key={expenseOption.id}
      className={
        expenseOption.featured === true || expenseOption.activated === true
          ? ''
          : 'hidden'
      }
    >
      <button
        className={cssClasses(expenseOption)}
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: ActionName.UpdateExpenseNavegationOption,
            payload: {
              ...expenseOption,
              activated: !expenseOption.activated,
            },
          });
        }}
      >
        <FormattedMessage id={expenseOption.id} />
        <span>
          {expenseOption.activated && <i className="far fa-trash-alt "></i>}
          {expenseOption.featured && !expenseOption.activated && (
            <i className="far fa-plus"></i>
          )}
        </span>
      </button>
    </li>
  );
}
