import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionName } from '../../state/store';
import { DECLARANT_QUERY } from '../../state/queries/declarant';
import { useQuery } from '@apollo/client';
import { AuthProps, Session, Person, AuthenticatedProps } from '../../typing';

interface AuthenticatedComponent {
  (prop: AuthenticatedProps): JSX.Element;
}

export default function withDeclarant(
    prop: AuthProps,
    WrappedComponent: AuthenticatedComponent,
): JSX.Element {
  const dispatch = useDispatch();
  const session: Session = useSelector((state) => state.session);
  const { loading, data, error } = useQuery(DECLARANT_QUERY, {
    variables: { uuid: session.user.sub },
  });

  if (error) return <p>Erro ao carregar dados.</p>;
  if (loading) return <p>Carregando...</p>;

  const payload: Person = data.declarant as Person;

  if (payload) {
    dispatch({ type: ActionName.UpdateDeclarant, payload });
  }

  return <WrappedComponent session={session} />;
}
