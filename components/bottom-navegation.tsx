import * as React from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { saveDeclaration } from '../state/graphql/declaration';
import { Session } from '../typing';

export interface IBottomNavegationProps {
  previous: string;
  next: string;
  validation?: (v: object) => boolean;
  save?: () => void;
  value?: object;
  session: Session;
}

/**
 * Navegation back and next buttons set component. No additional logic.
 */
export default function BottomNavegation({
  previous,
  next,
  validation,
  save,
  value,
  session,
}: IBottomNavegationProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="btn btn-gray green-bg previous"
        data-img="images/undraw_Balloons.svg"
        onClick={(e) => {
          e.preventDefault();
          router.push(previous);
        }}
      >
        <FormattedMessage id="button.back" />
      </button>
      <button
        className={
          validation(value)
            ? 'btn btn-gray green-bg next'
            : 'btn btn-gray  green-bg next'
        }
        data-img="images/step2.svg"
        onClick={(e) => {
          e.preventDefault();
          if (!validation(value)) return;
          if (typeof save !== 'undefined') {
            save();
          } else {
            // saves the current declaration state.
            dispatch(saveDeclaration(session));
          }
          router.push(next);
        }}
      >
        <FormattedMessage id="button.continue" />
      </button>
    </>
  );
}
