import { AnyAction } from 'redux';
import {
  State,
  createReceivedCash,
  createFreelance,
  createJob,
  createSalariedWork,
} from '../../typing';

export function handleUpdateDeclaration(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declaration = {
    ...state.declaration,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateIncomes(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.declaration.incomes = {
    ...state.declaration.incomes,
    ...action.payload,
  };
  return _state;
}

export function handleAddFreelanceCashReceived(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };

  if (!_state.declaration.incomes.freelance) {
    _state.declaration.incomes.freelance = createFreelance();
  }

  _state.declaration.incomes.freelance.cashReceived = [
    ...state.declaration.incomes.freelance.cashReceived,
    createReceivedCash(state.declarant.uuid),
  ];
  return _state;
}

export function handleUpdateFreelanceCashReceived(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declaration.incomes.freelance.cashReceived = [
    ...state.declaration.incomes.freelance.cashReceived,
  ];

  const index = state.declaration.incomes.freelance.cashReceived.findIndex(
    (p) => p.uuid == action.payload.uuid,
  );

  if (action.payload.income) {
    _state.declaration.incomes.freelance.cashReceived[index].income = {
      ..._state.declaration.incomes.freelance.cashReceived[index].income,
      ...action.payload.income,
    };
  } else {
    _state.declaration.incomes.freelance.cashReceived[index] = {
      ..._state.declaration.incomes.freelance.cashReceived[index],
      ...action.payload,
    };
  }

  return _state;
}

export function handleUpdateSalaryWork(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.declaration.incomes.salaryWork = {
    ...state.declaration.incomes.salaryWork,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateSalaryWorkJob(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declaration.incomes.salaryWork.jobs[action.payload.index] = {
    ..._state.declaration.incomes.salaryWork.jobs[action.payload.index],
    ...action.payload.job,
  };
  return _state;
}

export function handleCreateSalaryWorkJob(state: State, _: AnyAction): State {
  const _state = { ...state };
  if (!_state.declaration.incomes.salaryWork) {
    _state.declaration.incomes.salaryWork = createSalariedWork();
  } else {
    _state.declaration.incomes.salaryWork.jobs.push(createJob());
  }
  return _state;
}

export function handleRemoveSalaryWorkJob(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  const job = _state.declaration.incomes.salaryWork.jobs[action.payload.index];
  const jobs = _state.declaration.incomes.salaryWork.jobs.filter(
    (j) => j === job,
  );
  _state.declaration.incomes.salaryWork.jobs = jobs;

  return _state;
}

export function handleRemoveSalaryWork(state: State, action: AnyAction): State {
  const _state = { ...state };
  const index = action.payload.index as number;
  _state.declaration.incomes.salaryWork.jobs = state.declaration.incomes.salaryWork.jobs.filter(
    (_, i) => i !== index,
  );
  return _state;
}

export function handleUpdateSocialSecurityWithdrawal(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declaration.incomes.socialSecurityWithdrawal[action.payload.index] = {
    ..._state.declaration.incomes.socialSecurityWithdrawal[
      action.payload.index
    ],
    ...action.payload.withdrawal,
  };
  return _state;
}

export function handleAddSocialSecurityWithdrawal(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declaration.incomes.socialSecurityWithdrawal =
    action.payload.withdrawals;
  return _state;
}

export function handleRemoveSocialSecurityWithdrawal(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  const index = action.payload.index as number;
  _state.declaration.incomes.socialSecurityWithdrawal = _state.declaration.incomes.socialSecurityWithdrawal.filter(
    (_, i) => i !== index,
  );
  return _state;
}

export function handleDeclarantTelephone(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  _state.declarant.telephone = {
    ..._state.declarant.telephone,
    ...action.payload,
  };
  return _state;
}

export function handleDeclarantMobile(state: State, action: AnyAction): State {
  const _state = { ...state };
  _state.declarant.mobile = {
    ..._state.declarant.mobile,
    ...action.payload,
  };
  return _state;
}
export function handlePartnerTelephone(state: State, action: AnyAction): State {
  const _state = { ...state };
  return _state;
}
export function handlePartnerMobile(state: State, action: AnyAction): State {
  const _state = { ...state };
  return _state;
}

export function handleUpdateIncomeNavegation(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };

  _state.incomeNavegation = {
    ...state.incomeNavegation,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateExpenseNavegation(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };

  _state.expenseNavegation = {
    ...state.incomeNavegation,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateFinanceNavegation(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };

  _state.financeNavegation = {
    ...state.incomeNavegation,
    ...action.payload,
  };
  return _state;
}

export function handleUpdateIncomeNavegationOption(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  const index: number = state.incomeNavegation.options.findIndex(
    (o) => o.id === action.payload.id,
  );

  _state.incomeNavegation.options[index] = {
    ...action.payload,
  };
  return _state;
}

export function handleUpdateExpenseNavegationOption(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  const index: number = state.expenseNavegation.options.findIndex(
    (o) => o.id === action.payload.id,
  );

  _state.expenseNavegation.options[index] = {
    ...action.payload,
  };
  return _state;
}

export function handleUpdateFinanceNavegationOption(
  state: State,
  action: AnyAction,
): State {
  const _state = { ...state };
  const index: number = state.financeNavegation.options.findIndex(
    (o) => o.id === action.payload.id,
  );

  _state.financeNavegation.options[index] = {
    ...action.payload,
  };
  return _state;
}

export default {
  handleUpdateDeclaration,
  handleUpdateIncomes,
  handleAddFreelanceCashReceived,
  handleUpdateFreelanceCashReceived,
  handleUpdateSalaryWork,
  handleRemoveSalaryWork,
  handleUpdateSalaryWorkJob,
  handleCreateSalaryWorkJob,
  handleRemoveSalaryWorkJob,
  handleUpdateSocialSecurityWithdrawal,
  handleRemoveSocialSecurityWithdrawal,
  handleAddSocialSecurityWithdrawal,
  handleDeclarantTelephone,
  handleDeclarantMobile,
  handlePartnerTelephone,
  handlePartnerMobile,
  handleUpdateIncomeNavegation,
  handleUpdateExpenseNavegation,
  handleUpdateIncomeNavegationOption,
  handleUpdateExpenseNavegationOption,
  handleUpdateFinanceNavegationOption,
};
