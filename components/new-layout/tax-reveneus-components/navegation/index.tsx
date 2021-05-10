import React from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { ActionName } from '../../../../state/store';
import {
  IncomeNavegation,
  NavegationOption,
} from '../../../../typing/option-navegation';
import { Session } from '../../../../typing';
import { saveDeclaration } from '../../../../state/graphql/declaration';

export interface INavegationParams {
  backUrl: string;
  nextUrl: string;
  session: Session;
}

export default function Navegation({
  backUrl,
  nextUrl,
  session,
}: INavegationParams) {
  const router = useRouter();
  const dispatch = useDispatch();

  const nav: IncomeNavegation = useSelector((state) => state.incomeNavegation);
  const options: NavegationOption[] = useSelector((state) =>
    state.incomeNavegation.options.filter((o) => o.activated),
  );

  let current = nav.current;

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
        className="btn btn-gray green-bg previous"
        data-img="images/step2.svg"
        onClick={(e) => {
          e.preventDefault();
          if (prev) {
            router.push(prev.path);
          } else {
            router.push(backUrl);
          }

          dispatch({
            type: ActionName.UpdateIncomeNavegation,
            payload: {
              current: nextIndex,
            },
          });
        }}
      >
        <FormattedMessage id="button.back" />
      </button>
      <button
        className="btn btn-gray green-bg next"
        data-img="images/step6.svg"
        onClick={(e) => {
          e.preventDefault();

          // saves the current declaration state.
          dispatch(saveDeclaration(session));

          if (next) {
            router.push(next.path);
          } else {
            router.push(nextUrl);
          }

          dispatch({
            type: ActionName.UpdateIncomeNavegation,
            payload: {
              current: nextIndex,
            },
          });
        }}
      >
        <FormattedMessage id="button.continue" />
      </button>
    </>
  );
}
