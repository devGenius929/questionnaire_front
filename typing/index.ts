import { v4 as uuid } from 'uuid';
import {
  IncomeNavegation,
  ExpenseNavegation,
  FinanceNavegation,
} from './option-navegation';

export interface User {
  nickname: string;
  name: string;
  picture: string;
  sub: string;
}

export interface Session {
  user: User;
  idToken: string;
  accessToken: string;
  accessTokenScope: string;
  accessTokenExpiresAt: number;
}

export interface AuthenticatedProps {
  session: Session;
}

export interface AuthProps {
  props: AuthenticatedProps;
}

export function createDependant(): Dependant {
  return {
    uuid: uuid(),
    nickName: undefined,
    relationship: undefined,
  };
}

export function createPerson(): Person {
  return {
    uuid: uuid(),
    nickName: undefined,
    name: undefined,
    relationship: undefined,
    dateOfBirth: undefined,
    cpf: undefined,
    voterRegistration: undefined,
    occupation: {
      nature: undefined,
      occupation: undefined,
    },
    address: {
      uuid: uuid(),
      changedAddress: false,
      street: undefined,
      house: undefined,
      complement: undefined,
      neighbourhood: undefined,
      country: undefined,
      state: undefined,
      city: undefined,
      zip: undefined,
      phoneCode: undefined,
      phoneNumber: undefined,
    },
    telephone: {
      ddd: undefined,
      phoneNumber: undefined,
    },
    mobile: {
      ddd: undefined,
      phoneNumber: undefined,
    },
  };
}

export function createDeclarant(): Declarant {
  return {
    ...createPerson(),
    partner: undefined,
    dependants: [],
  };
}

export function createPartner(): Dependant {
  return createDependant();
}

export function createDeclaration(): Declaration {
  return {
    uuid: uuid(),
    lastTaxReturnReceipt: undefined,
    rectification: false,
    hasDisabled: false,
    incomes: createIncomes(),
  };
}

export function createIncomes(): Incomes {
  return {
    salaryWork: createSalariedWork(),
    freelance: undefined,
    ownCompany: undefined,
    farming: undefined,
    retirement: undefined,
    socialSecurityWithdrawal: undefined,
    alimony: undefined,
    rental: undefined,
    accumulatedIncome: undefined,
    miscellaneousIncome: undefined,
    incomeFromTaxInCourt: undefined,
  };
}

export function createOwnCompany(): OwnCompany {
  return {
    personUuid: undefined,
    companyName: undefined,
    cnpj: undefined,
    annualProLabore: undefined,
    officialPension: undefined,
    tax: undefined,
    dividends: undefined,
  };
}

export function createJob(): Job {
  return {
    personUuid: undefined,
    employerName: undefined,
    cpfCnPJ: undefined,
    annualGrossIncome: undefined,
    officialPension: undefined,
    tax: undefined,
    extraSalary: undefined,
  };
}

export function createSalariedWork(): SalariedWork {
  return {
    jobs: [createJob()],
  };
}

export function createFreelance(): Freelance {
  return {
    uuid: uuid(),
    declarantUuid: uuid(),
    // incomeFromForeignerCompany: undefined,
    // incomeFromCompany: undefined,
    // cashBookExpense: undefined,
    cashReceived: [],
  };
}

export function createFarming(): Farming {
  return {
    incomeExpenses: [
      {
        personUuid: undefined,
        incomes: undefined,
        expenses: undefined,
        familyProperty: false,
        foreignOrigin: false,
        country: undefined,
        moneyExchange: undefined,
        advanceTwoYearsAgo: undefined,
        advanceOneYearsAgo: undefined,
      },
    ],
    accumulatedLoss: [
      {
        personUuid: undefined,
        loss: undefined,
        familyPropertyRelated: undefined,
        foreignRelated: undefined,
      },
    ],
  };
}

export function createRetirement(): Retirement {
  return {
    personUuid: undefined,
    payerName: undefined,
    cnpj: undefined,
    taxableIncome: undefined,
    nonTaxableIncome: undefined,
    taxPaid: undefined,
    extraSalary: undefined,
    pensionPaid: undefined,
    fullExemption: false,
  };
}

export function createSocialSecurityWithdrawals(): SocialSecurityWithdrawal[] {
  return [createSocialSecurityWithdrawal()];
}

export function createSocialSecurityWithdrawal(): SocialSecurityWithdrawal {
  return {
    personUuid: undefined,
    kind: undefined,
    companyName: undefined,
    cnpj: undefined,
    amount: undefined,
    tax: undefined,
  };
}

export function createAlimony(): Alimony {
  return {
    personUuid: undefined,
    cashFlow: createCashFlow(),
    foreignOrigin: false,
  };
}

export function createCashFlow(): CashFlow {
  return {
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    octuber: 0,
    november: 0,
    december: 0,
  };
}

export function createRental(): Rental {
  return {
    privateRentals: [],
    companyRentals: [],
  };
}

export function createPrivateRental(): PrivateRental {
  return {
    personUuid: undefined,
    cashFlow: createCashFlow(),
    foreignOrigin: undefined,
    familyProperty: undefined,
  };
}

export function createCompanyRental(): CompanyRental {
  return {
    personUuid: undefined,
    companyName: undefined,
    cnpj: undefined,
    tax: undefined,
    familyProperty: undefined,
  };
}

export function createAccumulatedIncome(): AccumulatedIncome {
  return {
    personUuid: undefined,
    payer: undefined,
    cpfCnPJ: undefined,
    income: undefined,
    pension: undefined,
    tax: undefined,
    alimony: undefined,
    alimonyReceiverUuid: undefined,
    receivedAt: undefined,
    accumulationPeriod: undefined,
    // miscellaneousIncome: undefined,
    // incomeFromTaxInCourt: undefined,
  };
}

export function creteMiscellaneousIncome(): MiscellaneousIncome {
  return {
    foreignIncomes: [],
    incomes: [],
  };
}

export function createIncomeFromTaxInCourt(): IncomeFromTaxInCourt {
  return {
    incomes: [
      {
        personUuid: undefined,
        companyName: undefined,
        cnpj: undefined,
        interest: undefined,
        deposit: undefined,
      },
    ],
  };
}

export function createFamilyAspects(): FamilyAspects {
  return {
    hasMarried: false,
    hasDivorced: false,
    hadKids: false,
  };
}

export function createProfessionAspect() {
  return {
    changedJob: false,
    changedWorkCategory: false,
    startedOwnBusiness: false,
    hasRetired: false,
  };
}

export function createAssetsAspects() {
  return {
    boughtProperty: false,
    soldProperty: false,
    inheritedProperty: false,
    donatedProperty: false,
  };
}

export function createIncomeAspects() {
  return {
    hadAbnormalIncome: false,
  };
}

export function createFinanceAspects() {
  return {
    contributedPrevidence: false,
    newInvestments: false,
    investedInFunds: false,
    gotLoan: false,
  };
}

export function createExpenditureAspects() {
  return {
    gotHealthPlan: false,
    medicalCosts: false,
    tuition: false,
    alimony: false,
    hiredMaide: false,
    madeDonationWithTaxBenefits: false,
  };
}

export interface SelectionOption {
  id: string;
  value: string;
}

export interface Phone {
  ddd: string;
  phoneNumber: string;
}

export interface Person {
  uuid: string;
  supporterUuid?: string;
  partnerUuid?: string;
  relationship?: string;
  nickName: string;
  name: string;
  dateOfBirth: Date;
  cpf: string;
  voterRegistration: string;
  address: Address;
  occupation: Occupation;
  telephone: Phone;
  mobile: Phone;
}

export interface Dependant {
  uuid: string;
  nickName: string;
  relationship: string;
  cpf?: string;
}

export interface Declarant extends Person {
  partner: Dependant;
  dependants: Dependant[];
}

export interface Occupation {
  nature: string;
  occupation: string;
}

export interface Address {
  uuid: string;
  changedAddress: boolean;
  street: string;
  house: string;
  complement: string;
  neighbourhood: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  phoneCode: string;
  phoneNumber: string;
}

export interface FamilyAspects {
  hasMarried: boolean;
  hasDivorced: boolean;
  hadKids: boolean;
}

export interface ProfessionalAspects {
  changedJob: boolean;
  changedWorkCategory: boolean;
  startedOwnBusiness: boolean;
  hasRetired: boolean;
}

export interface AssetAspects {
  boughtProperty: boolean;
  soldProperty: boolean;
  inheritedProperty: boolean;
  donatedProperty: boolean;
}

export interface IncomeAspects {
  hadAbnormalIncome: boolean;
}

export interface FinanceAspects {
  contributedPrevidence: boolean;
  newInvestments: boolean;
  investedInFunds: boolean;
  gotLoan: boolean;
}

export interface ExpenditureAspects {
  gotHealthPlan: boolean;
  medicalCosts: boolean;
  tuition: boolean;
  alimony: boolean;
  hiredMaide: boolean;
  madeDonationWithTaxBenefits: boolean;
}

export interface YearAspect {
  family: FamilyAspects;
  profession: ProfessionalAspects;
  assets: AssetAspects;
  income: IncomeAspects;
  finance: FinanceAspects;
  expenditure: ExpenditureAspects;
}

export interface User {
  // eslint-disable-next-line camelcase
  family_name?: string;
  // eslint-disable-next-line camelcase
  given_name?: string;
  locale?: string;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  // eslint-disable-next-line camelcase
  updated_at?: string;
}

export interface Session {
  user: User;
  accessToken: string;
  accessTokenExpiresAt: number;
  accessTokenScope: string;
  createdAt: number;
  idToken: string;
}

export interface State {
  session: Session; // dados de conexao do usuario.
  declarant: Declarant; // pessoa declarando
  declaration: Declaration; // dados relacionados a declaracao per-se.
  alimonyDependants?: Person[]; // alimentandos (menores que recebem pensão alimenticia)
  aspects: YearAspect;
  incomeNavegation: IncomeNavegation; // navegacao da pagina de arrecadacao.
  expenseNavegation: ExpenseNavegation; // navegacao da pagina de despesas.
  financeNavegation: FinanceNavegation;
}

export interface Job {
  personUuid: string;
  employerName: string; // nome do empregador.
  cpfCnPJ: string; // CPF para empregador PF ou CnPJ para empregador PJ.
  annualGrossIncome: number; // total de rendimentos.
  officialPension: number; // previdencia oficial.
  tax: number; // imposto retido
  extraSalary: number; // decimo terceiro.
}

/**
 * Trabalho assalariado.
 */
export interface SalariedWork {
  jobs: Job[];
}

/**
 * Declaração.
 */
export interface Declaration {
  uuid: string;
  lastTaxReturnReceipt: string; // recibo da ultima declaracao.
  rectification: boolean; // é retificação?
  incomes: Incomes; // dados dos rendimentos.
  hasDisabled: boolean; // tem deficiente na declaracao.
}

/**
 * Rendimentos.
 */
export interface Incomes {
  salaryWork: SalariedWork; // trabalho assalariado.
  freelance: Freelance; // autonomo.
  ownCompany: OwnCompany; // empresa propria.
  farming: Farming; // atividade rural.
  retirement: Retirement; // aposentadoria.
  socialSecurityWithdrawal: SocialSecurityWithdrawal[]; // resgate previdencia
  alimony: Alimony; // pensão alimenticia.
  rental: Rental; // aluguel.
  accumulatedIncome: AccumulatedIncome; // Rendimento Acumulado Trabalhista ou Previdenciário
  miscellaneousIncome: MiscellaneousIncome;
  incomeFromTaxInCourt: IncomeFromTaxInCourt;
}

/**
 * Aposentadoria.
 */
export interface Retirement {
  personUuid: string; // Quem recebeu?
  payerName: string; // nome da fonte pagadora.
  cnpj: string; // Fonte pagadora
  taxableIncome: number; // Renda tributável
  nonTaxableIncome: number; // Parte isenta 65 anos
  taxPaid: number; // imposto retido
  extraSalary: number; // decimo terceiro
  pensionPaid: number; // Previdência oficial
  fullExemption: boolean; // isenção por doença e etc.
}

/**
 * Resgate Previdencia
 */
export interface SocialSecurityWithdrawal {
  personUuid: string; // quem recebeu?
  kind: string; // tipo de resgate.
  companyName: string; // nome da fonte pagadora.
  cnpj: string; // CnPJ da fonte pagadora.
  amount: number; // Resgate/ganho (R$)
  tax: number; // Imposto retido (R$)
}

/**
 * Atividade Rural.
 */
export interface Farming {
  incomeExpenses: IncomeExpenses[];
  accumulatedLoss: AccumulatedLoss[];
}

/**
 * Prejuizo acumulado.
 */
export interface AccumulatedLoss {
  personUuid: string;
  loss: number;
  familyPropertyRelated: boolean;
  foreignRelated: boolean;
}

/**
 * Lucro e prejuizo
 */
export interface IncomeExpenses {
  personUuid: string;
  incomes: CashFlow;
  expenses: CashFlow;
  familyProperty: boolean;
  foreignOrigin: boolean;
  country: string;
  moneyExchange: number;
  advanceTwoYearsAgo: number; // Adiant. em 2011 (R$)
  advanceOneYearsAgo: number; // Adiant. em 2020 (R$)
}

/**
 * Autonomo.
 */
export interface Freelance {
  uuid: string;
  declarantUuid: string;
  // incomeFromForeignerCompany: IncomeFromForeignerCompany;
  // incomeFromCompany: IncomeFromCompany;
  // cashBookExpense: CashBookExpense;
  cashReceived: ReceivedCash[];
}

export function createReceivedCash(personUuid: string): ReceivedCash {
  return {
    uuid: uuid(),
    personUuid,
    income: createCashFlow(),
  };
}

export interface ReceivedCash {
  uuid: string;
  personUuid: string;
  income: CashFlow;
}

/**
 * Despesas (fluxo de caixa)
 */
export interface CashBookExpense {
  personUuid: string;
  income: CashFlow;
}

/**
 * Rendimento de pessoa juridica no exterior.
 */
export interface IncomeFromForeignerCompany {
  personUuid: string;
  income: CashFlow;
}

/**
 * Fluxo de caixa.
 */
export interface CashFlow {
  january: number;
  february: number;
  march: number;
  april: number;
  may: number;
  june: number;
  july: number;
  august: number;
  september: number;
  octuber: number;
  november: number;
  december: number;
}

/**
 * Rendimentos de Pessoa Juridica.
 */
export interface IncomeFromCompany {
  personUuid: string;
  companyName: string;
  cnpj: string;
  totalAnnual: number;
  tax: number;
  officialPension: number;
}

/**
 * Empresa propria.
 */
export interface OwnCompany {
  personUuid: string;
  companyName: string;
  cnpj: string;
  annualProLabore: number;
  officialPension: number;
  tax: number;
  dividends: number;
}

/**
 * Pensão Alimenticia.
 */
export interface Alimony {
  personUuid: string; // Quem recebeu?
  cashFlow: CashFlow; // valores de jan, fev,...
  foreignOrigin: boolean; // origem no exterior
}

/**
 * Aluguel.
 */
export interface Rental {
  privateRentals: PrivateRental[];
  companyRentals: CompanyRental[];
}

export interface PrivateRental {
  personUuid: string; // Quem recebeu?
  cashFlow: CashFlow; // valores de jan, fev,...
  foreignOrigin: boolean; // origem no exterior
  familyProperty: boolean; // aluguel e de bem comum do casal
}

export interface CompanyRental {
  personUuid: string; // Quem recebeu?
  companyName: string; // Nome do locatário
  cnpj: string; // cnpj da empresa locataria.
  tax: number; // Imposto retido.
  familyProperty: boolean; // aluguel e de bem comum do casal
}

export interface AccumulatedIncome {
  personUuid: string; // Quem recebeu?
  payer: string; // Nome da fonte pagadora*
  cpfCnPJ: string; // CPF para pagador PF ou CnPJ para pagador PJ.
  income: number; // Rendimento
  pension: number; // Previdência oficial
  tax: number; // Imposto retido
  alimony: number; // Pensão alimentícia
  alimonyReceiverUuid: string; // Quem recebeu a pensão?
  receivedAt: Date; // Data do recebimento
  accumulationPeriod: number; // Meses de acumulação
}

export interface MiscellaneousIncome {
  foreignIncomes: IncomeFromForeignerCompany[]; // Outros rendimentos no exterior
  incomes: GeneralIncome[]; // Ganhos variados no Brasil
}

export interface GeneralIncome {
  personUuid: string; // Quem recebeu?
  kind: string; // tipo de rendimento.
  description: string; // Descrição do rendimento
  amount: number; // rendimento
}

// Rendimentos com imposto em juízo
export interface IncomeFromTaxInCourt {
  incomes: InterestFromTaxInCourt[];
}

export interface InterestFromTaxInCourt {
  personUuid: string; // Quem recebeu?
  companyName: string; // Nome da fonte pagadora
  cnpj: string; // cnpj da fonte pagadora
  interest: number; // Rendimento
  deposit: number; // Depósito judicial IR
}
