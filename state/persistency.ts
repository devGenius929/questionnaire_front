import { State } from '../typing';

function getKey(_state: State): string {
  return `state`;
}

function isStorageAvailable(): boolean {
  return (
    typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
  );
}

export function persist(state: State) {
  if (!isStorageAvailable()) {
    return;
  }

  window.localStorage.setItem(getKey(state), JSON.stringify(state));
}

export function loadState(state: State): State {
  if (!isStorageAvailable()) {
    return state;
  }

  const loadedState = window.localStorage.getItem(getKey(state));
  if (!loadedState && loadedState !== '') {
    return state;
  }
  return JSON.parse(loadedState);
}
