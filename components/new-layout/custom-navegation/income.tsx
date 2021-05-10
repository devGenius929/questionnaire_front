import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import Select from 'react-select';
import { NavegationOption } from '../../../typing/option-navegation';
import CustomNavegationItem from './income-item';
import { useDispatch } from 'react-redux';
import { ActionName } from '../../../state/store';

interface IncomeNavegationArg {
  incomeOptions: NavegationOption[];
}

function findIndex(options: NavegationOption[], option: NavegationOption): number {
  return options.findIndex((o) => o.id === option.id);
}

export default function IncomeNavegation({
  incomeOptions,
}: IncomeNavegationArg) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const options = incomeOptions.map((o) => ({
    value: o,
    label: intl.formatMessage({ id: o.id }),
  }));
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-sm-12 custom-search">
          <ul>
            {incomeOptions.map((o, i) => (
              <CustomNavegationItem
                key={o.id}
                incomeOption={useSelector(
                    (state) =>
                      state.incomeNavegation.options[
                          findIndex(state.incomeNavegation.options, o)
                      ],
                )}
              />
            ))}
          </ul>
        </div>

        <div className="col-sm-12 search-input">
          <Select
            options={options}
            onChange={(o) => {
              dispatch({
                type: ActionName.UpdateIncomeNavegationOption,
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
