import React from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { ActionName } from '../../../../state/store';
import {
  ExpenseNavegation,
  NavegationOption,
} from '../../../../typing/option-navegation';

export default function Navegation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const nav: ExpenseNavegation = useSelector((state) => state.incomeNavegation);
  const options: NavegationOption[] = useSelector((state) =>
    state.incomeNavegation.options.filter((o) => o.activated),
  );

  let current = nav.current;

  const moveBack = (e) => {
    e.preventDefault();
    prev ? router.push(prev.path) : router.push('/2021/arrecadacao');

    dispatch({
      type: ActionName.UpdateExpenseNavegation,
      payload: {
        current: nextIndex,
      },
    });
  };

  const moveForward = (e) => {
    e.preventDefault();
    next ? router.push(next.path) : router.push('/2021/despesas');

    dispatch({
      type: ActionName.UpdateExpenseNavegation,
      payload: {
        current: nextIndex,
      },
    });
  };

  if (current != -1 && router.pathname === '/2021/arrecadacao') {
    current = -1;
  }

  const nextIndex = current + 1 > options.length ? -1 : current + 1;
  const next: NavegationOption = options[nextIndex];
  const prevIndex = current - 1 < 0 ? -1 : current - 1;
  const prev: NavegationOption = options[prevIndex];

  return (
    <>
      <button
        className="btn btn-gray previous"
        data-img="images/step2.svg"
        onClick={moveBack}
      >
        <FormattedMessage id="button.back" />
      </button>
      <button
        className="btn btn-gray green-bg next"
        data-img="images/step6.svg"
        onClick={moveForward}
      >
        <FormattedMessage id="button.continue" />
      </button>
    </>
  );
}
