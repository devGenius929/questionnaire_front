import { AnyAction } from 'redux';
import { persist } from '../persistency';
import { State } from '../../typing';

export function handleUpdateSession(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.session = {
    ...state.session,
    ...action.payload,
  };
  _state.declarant.uuid = action.payload.user.sub;
  _state.declaration.uuid = action.payload.user.sub;
  persist(_state);
  return _state;
}

export default {
  handleUpdateSession,
};
