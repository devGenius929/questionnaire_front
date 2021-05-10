import { createStore, AnyAction, applyMiddleware } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { State, createDeclaration, createDeclarant } from '../typing';
import { loadState } from './persistency';
import YourYear from './reducers/your-year';
import CoreFamily from './reducers/core-family';
import Declaration from './reducers/declaration';
import Session from './reducers/session';
import createIncomeNavegation, {
  createExpensesNavegation,
  createFinanceNavegation,
} from '../typing/option-navegation';
import thunkMiddleware from 'redux-thunk';

export const initialState: State = {
  session: {
    user: {
      family_name: '',
      given_name: '',
      locale: '',
      name: '',
      nickname: '',
      picture: '',
      sub: '',
      updated_at: '',
    },
    accessToken: '',
    accessTokenExpiresAt: 0,
    accessTokenScope: '',
    createdAt: 0,
    idToken: '',
  },
  incomeNavegation: createIncomeNavegation(),
  expenseNavegation: createExpensesNavegation(),
  financeNavegation: createFinanceNavegation(),
  declarant: createDeclarant(),
  declaration: createDeclaration(),
  alimonyDependants: [],
  aspects: {
    family: {
      hasMarried: false,
      hasDivorced: false,
      hadKids: false,
    },
    profession: {
      changedJob: false,
      changedWorkCategory: false,
      startedOwnBusiness: false,
      hasRetired: false,
    },
    assets: {
      boughtProperty: false,
      soldProperty: false,
      inheritedProperty: false,
      donatedProperty: false,
    },
    income: {
      hadAbnormalIncome: false,
    },
    finance: {
      contributedPrevidence: false,
      newInvestments: false,
      investedInFunds: false,
      gotLoan: false,
    },
    expenditure: {
      gotHealthPlan: false,
      medicalCosts: false,
      tuition: false,
      alimony: false,
      hiredMaide: false,
      madeDonationWithTaxBenefits: false,
    },
  },
};

export enum ActionName {
  // eslint-disable-next-line no-unused-vars
  UpdateFamilyAspects = 'UPDATE_FAMILY_ASPECTS',
  // eslint-disable-next-line no-unused-vars
  UpdateProfessionAspects = 'UPDATE_PROFESSION_ASPECTS',
  // eslint-disable-next-line no-unused-vars
  UpdateAssetAspects = 'UPDATE_ASSET_ASPECTS',
  // eslint-disable-next-line no-unused-vars
  UpdateIncomeAspects = 'UPDATE_INCOME_ASPECTS',
  // eslint-disable-next-line no-unused-vars
  UpdateFinanceAspects = 'UPDATE_FINANCE_ASPECTS',
  // eslint-disable-next-line no-unused-vars
  UpdateExpenditureAspects = 'UPDATE_EXPENDITURE_ASPECTS',
  // eslint-disable-next-line no-unused-vars
  UpdateDeclarant = 'UPDATE_DECLARANT',
  // eslint-disable-next-line no-unused-vars
  CreatePartner = 'CREATE_PARTNER',
  // eslint-disable-next-line no-unused-vars
  RemovePartner = 'REMOVE_PARTNER',

  // dependants

  // eslint-disable-next-line no-unused-vars
  InitDependants = 'INIT_DEPENDENTS',
  // eslint-disable-next-line no-unused-vars
  RemoveDependants = 'REMOVE_DEPENDENTS',
  // eslint-disable-next-line no-unused-vars
  UpdateDependant = 'UPDATE_DEPENDANT',
  // eslint-disable-next-line no-unused-vars
  AddDependant = 'ADD_DEPENDANT',

  // Alimony Dependants

  // eslint-disable-next-line no-unused-vars
  InitAlimonyDependants = 'INIT_ALIMONY_DEPENDENTS',
  // eslint-disable-next-line no-unused-vars
  RemoveAlimonyDependants = 'REMOVE_ALIMONY_DEPENDENTS',

  // eslint-disable-next-line no-unused-vars
  UpdateDeclarantAddress = 'UPDATE_DECLARANT_ADDRESS',
  // eslint-disable-next-line no-unused-vars
  UpdateDeclarantAccupation = 'UPDATE_DECLARANT_OCCUPATION',
  // eslint-disable-next-line no-unused-vars
  UpdateDeclaration = 'UPDATE_DECLARATION',
  // eslint-disable-next-line no-unused-vars
  UpdateIncomes = 'UPDATE_INCOMES',
  // eslint-disable-next-line no-unused-vars
  UpdateSession = 'UPDATE_SESSION',

  // Income
  // eslint-disable-next-line no-unused-vars
  AddFreelanceCashReceived = 'ADD_FREELANCE_CASH_RECEIVED',
  // eslint-disable-next-line no-unused-vars
  UpdateFreelanceCashReceived = 'UPDATE_FREELANCE_CASH_RECEIVED',
  // eslint-disable-next-line no-unused-vars
  UpdateSalaryWork = 'UPDATE_SALARY_WORK',
  // eslint-disable-next-line no-unused-vars
  RemoveSalaryWork = 'REMOVE_SALARY_WORK',
  // eslint-disable-next-line no-unused-vars
  UpdateSalaryWorkJob = 'UPDATE_SALARY_WORK_JOB',
  // eslint-disable-next-line no-unused-vars
  CreateSalaryWorkJob = 'CREATE_SALARY_WORK_JOB',
  // eslint-disable-next-line no-unused-vars
  RemoveSalaryWorkJob = 'REMOVE_SALARY_WORK_JOB',
  // eslint-disable-next-line no-unused-vars
  UpdateSocialSecurityWithdrawal = 'UPDATE_SOCIAL_SECURITY_WITHDRAWAL',
  // eslint-disable-next-line no-unused-vars
  RemoveSocialSecurityWithdrawal = 'REMOVE_SOCIAL_SECURITY_WITHDRAWAL',
  // eslint-disable-next-line no-unused-vars
  AddSocialSecurityWithdrawal = 'ADD_SOCIAL_SECURITY_WITHDRAWAL',

  // eslint-disable-next-line no-unused-vars
  UpdateDeclarantTelephone = 'UPDATE_DECLARANT_TELEPHONE',
  // eslint-disable-next-line no-unused-vars
  UpdateDeclarantMobile = 'UPDATE_DECLARANT_MOBILE',
  // eslint-disable-next-line no-unused-vars
  UpdatePartnerTelephone = 'UPDATE_PARTNER_TELEPHONE',
  // eslint-disable-next-line no-unused-vars
  UpdatePartnerMobile = 'UPDATE_PARTNER_MOBILE',
  // eslint-disable-next-line no-unused-vars
  UpdatePartner = 'UPDATE_PARTNER',
  // eslint-disable-next-line no-unused-vars
  UpdateIncomeNavegation = 'UPDATE_INCOME_NAVEGATION',
  // eslint-disable-next-line no-unused-vars
  UpdateExpenseNavegation = 'UPDATE_EXPENSE_NAVEGATION',
  // eslint-disable-next-line no-unused-vars
  UpdateFinanceNavegation = 'UPDATE_FINANCE_NAVEGATION',
  // eslint-disable-next-line no-unused-vars
  UpdateIncomeNavegationOption = 'UPDATE_INCOME_NAVEGATION_OPTION',
  // eslint-disable-next-line no-unused-vars
  UpdateExpenseNavegationOption = 'UPDATE_EXPENSE_NAVEGATION_OPTION',
  // eslint-disable-next-line no-unused-vars
  UpdateFinanceNavegationOption = 'UPDATE_FINANCE_NAVEGATION_OPTION',
}

// create your reducer
const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case ActionName.UpdateSession:
      return Session.handleUpdateSession(state, action);
    case ActionName.UpdateFamilyAspects:
      return YourYear.handleUpdateFamilyAspects(state, action);
    case ActionName.UpdateProfessionAspects:
      return YourYear.handleUpdateProfessionAspects(state, action);
    case ActionName.UpdateAssetAspects:
      return YourYear.handleUpdateAssetAspects(state, action);
    case ActionName.UpdateIncomeAspects:
      return YourYear.handleUpdateIncomeAspects(state, action);
    case ActionName.UpdateFinanceAspects:
      return YourYear.handleUpdateFinanceAspects(state, action);
    case ActionName.UpdateExpenditureAspects:
      return YourYear.handleUpdateExpenditureAspects(state, action);
    case ActionName.UpdateDeclarant:
      return CoreFamily.handleUpdateDeclarant(state, action);
    case ActionName.CreatePartner:
      return CoreFamily.handleUCreatePartner(state, action);
    case ActionName.UpdatePartner:
      return CoreFamily.handleUpdatePartner(state, action);
    case ActionName.RemovePartner:
      return CoreFamily.handleRemovePartner(state, action);
    case ActionName.InitDependants:
      return CoreFamily.handleInitDependants(state, action);
    case ActionName.RemoveDependants:
      return CoreFamily.handleRemoveDependants(state, action);
    case ActionName.InitAlimonyDependants:
      return CoreFamily.handleInitAlimonyDependants(state, action);
    case ActionName.RemoveAlimonyDependants:
      return CoreFamily.handleRemoveAlimonyDependants(state, action);
    case ActionName.UpdateDeclarantAddress:
      return CoreFamily.handleUpdateDeclarantAddress(state, action);
    case ActionName.UpdateDeclarantAccupation:
      return CoreFamily.handleUpdateDeclarantOccupation(state, action);
    case ActionName.UpdateDeclaration:
      return Declaration.handleUpdateDeclaration(state, action);
    // Income
    case ActionName.AddFreelanceCashReceived:
      return Declaration.handleAddFreelanceCashReceived(state, action);
    case ActionName.UpdateFreelanceCashReceived:
      return Declaration.handleUpdateFreelanceCashReceived(state, action);
    case ActionName.UpdateIncomes:
      return Declaration.handleUpdateIncomes(state, action);
    case ActionName.UpdateSalaryWork:
      return Declaration.handleUpdateSalaryWork(state, action);
    case ActionName.RemoveSalaryWork:
      return Declaration.handleRemoveSalaryWork(state, action);
    case ActionName.UpdateSalaryWorkJob:
      return Declaration.handleUpdateSalaryWorkJob(state, action);
    case ActionName.CreateSalaryWorkJob:
      return Declaration.handleCreateSalaryWorkJob(state, action);
    case ActionName.RemoveSalaryWorkJob:
      return Declaration.handleRemoveSalaryWorkJob(state, action);
    case ActionName.UpdateSocialSecurityWithdrawal:
      return Declaration.handleUpdateSocialSecurityWithdrawal(state, action);
    case ActionName.RemoveSocialSecurityWithdrawal:
      return Declaration.handleRemoveSocialSecurityWithdrawal(state, action);
    case ActionName.AddSocialSecurityWithdrawal:
      return Declaration.handleAddSocialSecurityWithdrawal(state, action);
    case ActionName.UpdateDeclarantTelephone:
      return Declaration.handleDeclarantTelephone(state, action);
    case ActionName.UpdateDeclarantMobile:
      return Declaration.handleDeclarantMobile(state, action);
    case ActionName.UpdatePartnerTelephone:
      return Declaration.handlePartnerTelephone(state, action);
    case ActionName.UpdatePartnerMobile:
      return Declaration.handlePartnerMobile(state, action);
    case ActionName.UpdateIncomeNavegation:
      return Declaration.handleUpdateIncomeNavegation(state, action);
    case ActionName.UpdateExpenseNavegation:
      return Declaration.handleUpdateExpenseNavegation(state, action);
    case ActionName.UpdateIncomeNavegationOption:
      return Declaration.handleUpdateIncomeNavegationOption(state, action);
    case ActionName.UpdateExpenseNavegationOption:
      return Declaration.handleUpdateExpenseNavegationOption(state, action);
    case ActionName.UpdateFinanceNavegationOption:
      return Declaration.handleUpdateFinanceNavegationOption(state, action);
    case ActionName.UpdateDependant:
      return CoreFamily.handleUpdateDependant(state, action);
    case ActionName.AddDependant:
      return CoreFamily.handleAddDependant(state, action);
    default:
      return loadState(state);
  }
};

// create a makeStore function
const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
