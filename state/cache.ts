import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { Person } from '../typing';
import { initialState } from './store';

export const cache: InMemoryCache = new InMemoryCache({});

/**
 * Set initial values when we create cache variables.
 */
export const declarantVar: ReactiveVar<Person> = makeVar<Person>(
  initialState.declarant,
);
