import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { ActionName } from '../../../state/store';
import { NavegationOption } from '../../../typing/option-navegation';

interface FinanceNavegationItemArg {
  financeOption: NavegationOption;
}

function cssClasses(option: NavegationOption): string {
  if (option.activated === true) {
    return 'custome_select_event active';
  }

  return 'custome_select_event';
}

export default function FinanceNavetationItem({
  financeOption,
}: FinanceNavegationItemArg) {
  const dispatch = useDispatch();

  return (
    <li
      key={financeOption.id}
      className={
        financeOption.featured === true || financeOption.activated === true
          ? ''
          : 'hidden'
      }
    >
      <button
        className={cssClasses(financeOption)}
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: ActionName.UpdateFinanceNavegationOption,
            payload: {
              ...financeOption,
              activated: !financeOption.activated,
            },
          });
        }}
      >
        <FormattedMessage id={financeOption.id} />
        <span>
          {financeOption.activated && <i className="far fa-trash-alt "></i>}
          {financeOption.featured && !financeOption.activated && (
            <i className="far fa-plus"></i>
          )}
        </span>
      </button>
    </li>
  );
}
