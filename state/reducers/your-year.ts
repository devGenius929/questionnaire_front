import { State } from '../../typing';
import { AnyAction } from 'redux';
import { createPartner, createDependant } from '../../typing';

export function handleUpdateFamilyAspects(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.aspects.family = {
    ...state.aspects.family,
    ...action.payload,
  };

  if (action.payload.hasMarried && !_state.declarant.partner) {
    _state.declarant.partner = createPartner();
  }

  if (action.payload.hadKids && _state.declarant.dependants.length == 0) {
    _state.declarant.dependants = [createDependant()];
  }
  return _state;
}

export function handleUpdateProfessionAspects(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.aspects.profession = {
    ...state.aspects.profession,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateAssetAspects(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.aspects.assets = {
    ...state.aspects.assets,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateIncomeAspects(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.aspects.income = {
    ...state.aspects.income,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateFinanceAspects(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.aspects.finance = {
    ...state.aspects.finance,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateExpenditureAspects(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.aspects.expenditure = {
    ...state.aspects.expenditure,
    ...action.payload,
  };
  return _state;
}

export default {
  handleUpdateFamilyAspects,
  handleUpdateProfessionAspects,
  handleUpdateAssetAspects,
  handleUpdateIncomeAspects,
  handleUpdateFinanceAspects,
  handleUpdateExpenditureAspects,
};
