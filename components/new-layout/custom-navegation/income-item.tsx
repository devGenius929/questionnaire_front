import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { ActionName } from '../../../state/store';
import { NavegationOption } from '../../../typing/option-navegation';

interface IncomeNavegationItemArg {
  incomeOption: NavegationOption;
}

function cssClasses(option: NavegationOption): string {
  if (option.activated === true) {
    return 'custome_select_event active';
  }

  return 'custome_select_event';
}

export default function IncomeNavetationItem({
  incomeOption,
}: IncomeNavegationItemArg) {
  const dispatch = useDispatch();

  return (
    <li
      key={incomeOption.id}
      className={
        incomeOption.featured === true || incomeOption.activated === true
          ? ''
          : 'hidden'
      }
    >
      <button
        className={cssClasses(incomeOption)}
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: ActionName.UpdateIncomeNavegationOption,
            payload: {
              ...incomeOption,
              activated: !incomeOption.activated,
            },
          });
        }}
      >
        <FormattedMessage id={incomeOption.id} />
        <span>
          {incomeOption.activated && <i className="far fa-trash-alt "></i>}
          {incomeOption.featured && !incomeOption.activated && (
            <i className="far fa-plus"></i>
          )}
        </span>
      </button>
    </li>
  );
}
