import { AnyAction } from 'redux';
import { State, createPerson, createDependant } from '../../typing';

export function handleUpdateDeclarant(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.declarant = {
    ...state.declarant,
    ...action.payload,
  };
  return _state;
}

export function handleUCreatePartner(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.declarant.partner = _state.declarant.partner ?? createDependant();
  return _state;
}

export function handleRemovePartner(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.declarant.partner = undefined;
  return _state;
}

export function handleUpdatePartner(state: State, action: AnyAction): State {
  const _state = { ...state };

  const partner =
    state.declarant.partner ??
    state.declarant.dependants.find((p) => p.uuid === action.payload.uuid);

  // make sure that a partner is not in the list of dependants.
  const deps = state.declarant.dependants.filter(
    (p) => p.uuid !== action.payload.uuid,
  );
  state.declarant.dependants = [...deps];

  // avoid changing the partner UUID when another dependant is selected as a partner by mistake.
  if (partner) {
    action.payload.uuid = partner.uuid;
  }

  _state.declarant.partner = {
    ...partner,
    ..._state.declarant.partner,
    ...action.payload,
  };
  return _state;
}

export function handleInitDependants(state: State, action: AnyAction): State {
  const _state = { ...state };

  if (_state.declarant.dependants.length > 0) {
    return _state;
  }

  const dependant = createDependant();
  _state.declarant.dependants = [dependant];
  return _state;
}

export function handleRemoveDependants(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.declarant.dependants = [];
  return _state;
}

export function handleInitAlimonyDependants(state: State, _: AnyAction): State {
  const _state = { ...state };
  if (_state.alimonyDependants.length > 0) {
    return _state;
  }

  const dependent = createPerson();
  _state.alimonyDependants = [dependent];
  return _state;
}

export function handleRemoveAlimonyDependants(
  state: State,
  _: AnyAction,
): State {
  const _state = { ...state };
  _state.alimonyDependants = [];
  return _state;
}

export function handleUpdateDeclarantAddress(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declarant.address = {
    ...state.declarant.address,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateDeclarantOccupation(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declarant.occupation = {
    ...state.declarant.occupation,
    ...action.payload,
  };
  return _state;
}

export function handleAddDependant(state: State, _: AnyAction): State {
  const _state = { ...state };
  const dependant = createDependant();

  if (_state.declarant.dependants) {
    _state.declarant.dependants = [..._state.declarant.dependants, dependant];
  } else {
    _state.declarant.dependants = [dependant];
  }

  return _state;
}

export function handleUpdateDependant(state: State, action: AnyAction): State {
  const _state = { ...state };

  if (
    state.declarant.partner &&
    state.declarant.partner.uuid === action.payload.uuid
  ) {
    _state.declarant.partner = {
      ...action.payload,
    };
  } else {
    const index: number = state.declarant.dependants.findIndex(
      (o) => o.uuid === action.payload.uuid,
    );

    _state.declarant.dependants[index] = {
      ...action.payload,
    };
  }

  return _state;
}

export default {
  // declarant
  handleUpdateDeclarant,
  handleUpdateDeclarantAddress,
  handleUpdateDeclarantOccupation,
  // partner
  handleUCreatePartner,
  handleUpdatePartner,
  handleRemovePartner,
  // dependants
  handleInitDependants,
  handleRemoveDependants,
  handleAddDependant,
  handleUpdateDependant,
  // alimony
  handleInitAlimonyDependants,
  handleRemoveAlimonyDependants,
};
