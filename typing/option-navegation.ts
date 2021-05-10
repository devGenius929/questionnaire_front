// Tipo de pagina customizada para bens (Arrecadacao)
export interface NavegationOption {
  id: string; // id de tradução.
  idRight: string;
  description: string;
  rightDescription: string;
  path: string; // URL da pagina.
  featured: boolean; // em destaque?
  activated: boolean; // selecionado pelo usuario?
}

// Tipo de controle de navegacao da arrecadacao.
export interface IncomeNavegation {
  current: number;
  options: NavegationOption[];
}

export interface ExpenseNavegation {
  current: number;
  options: NavegationOption[];
}

export interface FinanceNavegation {
  current: number;
  options: NavegationOption[];
}

export default function createIncomeNavegation(): IncomeNavegation {
  return {
    current: -1,
    options: loadIncomeNavetationOptions(),
  };
}

export function getCurrentIncomeNavegation(
  nav: IncomeNavegation,
): NavegationOption {
  return nav.options.filter((o) => o.activated)[nav.current];
}

export function getCurrentExpenseNavegation(
  nav: ExpenseNavegation,
): NavegationOption {
  return nav.options.filter((o) => o.activated)[nav.current];
}

function loadIncomeNavetationOptions(): NavegationOption[] {
  return [
    {
      id: 'income.navegation.option.salaried-work',
      idRight: 'income.navegation.option.salaried-work.right',
      description: 'income.navegation.option.salaried-work.description',
      rightDescription:
        'income.navegation.option.salaried-work.description.right',
      path: '/2021/arrecadacao/trabalho-assalariado',
      featured: true,
      activated: false,
    },
    {
      id: 'income.navegation.option.job-contract',
      idRight: 'income.navegation.option.job-contract.right',
      description: 'income.navegation.option.job-contract.description',
      rightDescription:
        'income.navegation.option.job-contract.description.right',
      path: '/2021/arrecadacao/trabalho-assalariado',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.military',
      idRight: 'income.navegation.option.military.right',
      description: 'income.navegation.option.military.description',
      rightDescription: 'income.navegation.option.military.description.right',
      path: '/2021/arrecadacao/trabalho-assalariado',
      featured: true,
      activated: false,
    },
    {
      id: 'income.navegation.option.freelancer',
      idRight: 'income.navegation.option.freelancer.right',
      description: 'income.navegation.option.freelancer.description',
      rightDescription: 'income.navegation.option.freelancer.description.right',
      path: '/2021/arrecadacao/autonomo-fluxo-de-caixa',
      featured: true,
      activated: false,
    },
    {
      id: 'income.navegation.option.uber',
      idRight: 'income.navegation.option.uber.right',
      description: 'income.navegation.option.uber.description',
      rightDescription: 'income.navegation.option.uber.description.right',
      path: '/2021/arrecadacao/autonomo-fluxo-de-caixa',
      featured: true,
      activated: false,
    },
    {
      id: 'income.navegation.option.inlfeux',
      idRight: 'income.navegation.option.inlfeux.right',
      description: 'income.navegation.option.inlfeux.description',
      rightDescription: 'income.navegation.option.inlfeux.description.right',
      path: '/2021/arrecadacao/autonomo-fluxo-de-caixa',
      featured: true,
      activated: false,
    },
    {
      id: 'income.navegation.option.own-company',
      idRight: 'income.navegation.option.own-company.right',
      description: 'income.navegation.option.own-company.description',
      rightDescription:
        'income.navegation.option.own-company.description.right',
      path: '/2021/arrecadacao/empresa-propria',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.mei',
      idRight: 'income.navegation.option.mei.right',
      description: 'income.navegation.option.mei.description',
      rightDescription: 'income.navegation.option.mei.description.right',
      path: '/2021/arrecadacao/empresa-propria',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.received-rent',
      idRight: 'income.navegation.option.received-rent.right',
      description: 'income.navegation.option.received-rent.description',
      rightDescription:
        'income.navegation.option.received-rent.description.right',
      path: '/2021/arrecadacao/aluguel-pf',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.airbnb',
      idRight: 'income.navegation.option.airbnb.right',
      description: 'income.navegation.option.airbnb.description',
      rightDescription: 'income.navegation.option.airbnb.description.right',
      path: '/2021/arrecadacao/aluguel-pf',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.retirement',
      idRight: 'income.navegation.option.retirement.right',
      description: 'income.navegation.option.retirement.description',
      rightDescription: 'income.navegation.option.retirement.description.right',
      path: '/2021/arrecadacao/aposentadoria',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.reform',
      idRight: 'income.navegation.option.reform.right',
      description: 'income.navegation.option.reform.description',
      rightDescription: 'income.navegation.option.reform.description.right',
      path: '/2021/arrecadacao/aposentadoria',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.official.pension',
      idRight: 'income.navegation.option.official.pension.right',
      description: 'income.navegation.option.official.pension.description',
      rightDescription:
        'income.navegation.option.official.pension.description.right',
      path: '/2021/arrecadacao/aposentadoria',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.private.pension',
      idRight: 'income.navegation.option.private.pension.right',
      description: 'income.navegation.option.private.pension.description',
      rightDescription:
        'income.navegation.option.private.pension.description.right',
      path: '/2021/arrecadacao/aposentadoria',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.rural-activity',
      idRight: 'income.navegation.option.rural-activity.right',
      description: 'income.navegation.option.rural-activity.description',
      rightDescription:
        'income.navegation.option.rural-activity.description.right',
      path: '/2021/arrecadacao/atividade-rural',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.pension-withdrawal',
      idRight: 'income.navegation.option.pension-withdrawal.right',
      description: 'income.navegation.option.pension-withdrawal.description',
      rightDescription:
        'income.navegation.option.pension-withdrawal.description.right',
      path: '/2021/arrecadacao/resgate-previdencia',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.alimony',
      idRight: 'income.navegation.option.alimony.right',
      description: 'income.navegation.option.alimony.description',
      rightDescription: 'income.navegation.option.alimony.description.right',
      path: '/2021/arrecadacao/pensao-alimenticia',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.accumulated-income',
      idRight: 'income.navegation.option.accumulated-income.right',
      description: 'income.navegation.option.accumulated-income.description',
      rightDescription:
        'income.navegation.option.accumulated-income.description.right',
      path: '/2021/arrecadacao/rendimento-acumulado',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.diverse-income',
      idRight: 'income.navegation.option.diverse-income.right',
      description: 'income.navegation.option.diverse-income.description',
      rightDescription:
        'income.navegation.option.diverse-income.description.right',
      path: '/2021/arrecadacao/rendimento-diverso',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.fgts-withdraw',
      idRight: 'income.navegation.option.fgts-withdraw.right',
      description: 'income.navegation.option.fgts-withdraw.description',
      rightDescription:
        'income.navegation.option.fgts-withdraw.description.right',
      path: '/2021/arrecadacao/rendimento-diverso',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.scholarship',
      idRight: 'income.navegation.option.scholarship.right',
      description: 'income.navegation.option.scholarship.description',
      rightDescription:
        'income.navegation.option.scholarship.description.right',
      path: '/2021/arrecadacao/rendimento-diverso',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.reward',
      idRight: 'income.navegation.option.reward.right',
      description: 'income.navegation.option.reward.description',
      rightDescription: 'income.navegation.option.reward.description.right',
      path: '/2021/arrecadacao/rendimento-diverso',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.bbb-reward',
      idRight: 'income.navegation.option.bbb-reward.right',
      description: 'income.navegation.option.bbb-reward.description',
      rightDescription: 'income.navegation.option.bbb-reward.description.right',
      path: '/2021/arrecadacao/rendimento-diverso',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.income-with-taxes',
      idRight: 'income.navegation.option.income-with-taxes.right',
      description: 'income.navegation.option.income-with-taxes.description',
      rightDescription:
        'income.navegation.option.income-with-taxes.description.right',
      path: '/2021/arrecadacao/rendimentos-com-imposto',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.donation-received',
      idRight: 'income.navegation.option.donation-received.right',
      description: 'income.navegation.option.donation-received.description',
      rightDescription:
        'income.navegation.option.donation-received.description.right',
      path: '/2021/arrecadacao/doacao',
      featured: false,
      activated: false,
    },
    {
      id: 'income.navegation.option.inheritance-received',
      idRight: 'income.navegation.option.inheritance-received.right',
      description: 'income.navegation.option.inheritance-received.description',
      rightDescription:
        'income.navegation.option.inheritance-received.description.right',
      path: '/2021/arrecadacao/heranca',
      featured: false,
      activated: false,
    },
  ];
}

export function createExpensesNavegation(): ExpenseNavegation {
  return {
    current: -1,
    options: loadExpenseNavegationOptions(),
  };
}

function loadExpenseNavegationOptions(): NavegationOption[] {
  return [
    {
      id: 'expences.navegation.option.health',
      idRight: 'expences.navegation.option.health.right',
      description: 'expences.navegation.option.health.description',
      rightDescription: 'expences.navegation.option.health.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: true,
      activated: false,
    },
    {
      id: 'expences.navegation.option.dentist',
      idRight: 'expences.navegation.option.dentist.right',
      description: 'expences.navegation.option.dentist.description',
      rightDescription: 'expences.navegation.option.dentist.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.physiotherapist',
      idRight: 'expences.navegation.option.physiotherapist.right',
      description: 'expences.navegation.option.physiotherapist.description',
      rightDescription:
        'expences.navegation.option.physiotherapist.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.speech-therapist',
      idRight: 'expences.navegation.option.speech-therapist.right',
      description: 'expences.navegation.option.speech-therapist.description',
      rightDescription:
        'expences.navegation.option.speech-therapist.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.hospital',
      idRight: 'expences.navegation.option.hospital.right',
      description: 'expences.navegation.option.hospital.description',
      rightDescription: 'expences.navegation.option.hospital.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.clinic',
      idRight: 'expences.navegation.option.clinic.right',
      description: 'expences.navegation.option.clinic.description',
      rightDescription: 'expences.navegation.option.clinic.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.laboratory',
      idRight: 'expences.navegation.option.laboratory.right',
      description: 'expences.navegation.option.laboratory.description',
      rightDescription:
        'expences.navegation.option.laboratory.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.doctor',
      idRight: 'expences.navegation.option.doctor.right',
      description: 'expences.navegation.option.doctor.description',
      rightDescription: 'expences.navegation.option.doctor.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.health-insurance-brazil',
      idRight: 'expences.navegation.option.health-insurance-brazil.right',
      description:
        'expences.navegation.option.health-insurance-brazil.description',
      rightDescription:
        'expences.navegation.option.health-insurance-brazil.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.psychologist',
      idRight: 'expences.navegation.option.psychologist.right',
      description: 'expences.navegation.option.psychologist.description',
      rightDescription:
        'expences.navegation.option.psychologist.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.occupational-therapist',
      idRight: 'expences.navegation.option.occupational-therapist.right',
      description:
        'expences.navegation.option.occupational-therapist.description',
      rightDescription:
        'expences.navegation.option.occupational-therapist.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.orthopedic-prostheses',
      idRight: 'expences.navegation.option.orthopedic-prostheses.right',
      description:
        'expences.navegation.option.orthopedic-prostheses.description',
      rightDescription:
        'expences.navegation.option.orthopedic-prostheses.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.dental-prosthetics',
      idRight: 'expences.navegation.option.dental-prosthetics.right',
      description: 'expences.navegation.option.dental-prosthetics.description',
      rightDescription:
        'expences.navegation.option.dental-prosthetics.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.wheelchair',
      idRight: 'expences.navegation.option.wheelchair.right',
      description: 'expences.navegation.option.wheelchair.description',
      rightDescription:
        'expences.navegation.option.wheelchair.description.right',
      path: '/2021/despesas/despesas-medicas',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.education',
      idRight: 'expences.navegation.option.education.right',
      description: 'expences.navegation.option.education.description',
      rightDescription:
        'expences.navegation.option.education.description.right',
      path: '/2021/despesas/educacao',
      featured: true,
      activated: false,
    },
    {
      id: 'expences.navegation.option.kindergarten',
      idRight: 'expences.navegation.option.kindergarten.right',
      description: 'expences.navegation.option.kindergarten.description',
      rightDescription:
        'expences.navegation.option.kindergarten.description.right',
      path: '/2021/despesas/educacao',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.high-school',
      idRight: 'expences.navegation.option.high-school.right',
      description: 'expences.navegation.option.high-school.description',
      rightDescription:
        'expences.navegation.option.high-school.description.right',
      path: '/2021/despesas/educacao',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.elementary-school',
      idRight: 'expences.navegation.option.elementary-school.right',
      description: 'expences.navegation.option.elementary-school.description',
      rightDescription:
        'expences.navegation.option.elementary-school.description.right',
      path: '/2021/despesas/educacao',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.university-education',
      idRight: 'expences.navegation.option.university-education.right',
      description:
        'expences.navegation.option.university-education.description',
      rightDescription:
        'expences.navegation.option.university-education.description.right',
      path: '/2021/despesas/educacao',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.professional-courses',
      idRight: 'expences.navegation.option.professional-courses.right',
      description:
        'expences.navegation.option.professional-courses.description',
      rightDescription:
        'expences.navegation.option.professional-courses.description.right',
      path: '/2021/despesas/educacao',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.specialization-course',
      idRight: 'expences.navegation.option.specialization-course.right',
      description:
        'expences.navegation.option.specialization-course.description',
      rightDescription:
        'expences.navegation.option.specialization-course.description.right',
      path: '/2021/despesas/educacao',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.official-pension',
      idRight: 'expences.navegation.option.official-pension.right',
      description: 'expences.navegation.option.official-pension.description',
      rightDescription:
        'expences.navegation.option.official-pension.description.right',
      path: '/2021/despesas/previdencia-oficial',
      featured: true,
      activated: false,
    },
    {
      id: 'expences.navegation.option.INSS',
      idRight: 'expences.navegation.option.INSS.right',
      description: 'expences.navegation.option.INSS.description',
      rightDescription: 'expences.navegation.option.INSS.description.right',
      path: '/2021/despesas/previdencia-oficial',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.private-pension',
      idRight: 'expences.navegation.option.private-pension.right',
      description: 'expences.navegation.option.private-pension.description',
      rightDescription:
        'expences.navegation.option.private-pension.description.right',
      path: '/2021/despesas/previdencia-oficial',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.alimony-paid-directly',
      idRight: 'expences.navegation.option.alimony-paid-directly.right',
      description:
        'expences.navegation.option.alimony-paid-directly.description',
      rightDescription:
        'expences.navegation.option.alimony-paid-directly.description.right',
      path: '/2021/despesas/pensao-alimenticia-direta',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.alimony-collected-source',
      idRight: 'expences.navegation.option.alimony-collected-source.right',
      description:
        'expences.navegation.option.alimony-collected-source.description',
      rightDescription:
        'expences.navegation.option.alimony-collected-source.description.right',
      path: '/2021/despesas/pensao-alimenticia',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.alimony-paid-company',
      idRight: 'expences.navegation.option.alimony-paid-company.right',
      description:
        'expences.navegation.option.alimony-paid-company.description',
      rightDescription:
        'expences.navegation.option.alimony-paid-company.description.right',
      path: '/2021/despesas/pensao-alimenticia',
      featured: true,
      activated: false,
    },
    {
      id: 'expences.navegation.option.donation-with-tax-benefit',
      idRight: 'expences.navegation.option.donation-with-tax-benefit.right',
      description:
        'expences.navegation.option.donation-with-tax-benefit.description',
      rightDescription:
        'expences.navegation.option.donation-with-tax-benefit.description.right',
      path: '/2021/despesas/doacoes',
      featured: true,
      activated: false,
    },
    {
      id: 'expences.navegation.option.donation-encouraged',
      idRight: 'expences.navegation.option.donation-encouraged.right',
      description: 'expences.navegation.option.donation-encouraged.description',
      rightDescription:
        'expences.navegation.option.donation-encouraged.description.right',
      path: '/2021/despesas/doacoes',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.complementary-tax-payment',
      idRight: 'expences.navegation.option.complementary-tax-payment.right',
      description:
        'expences.navegation.option.complementary-tax-payment.description',
      rightDescription:
        'expences.navegation.option.complementary-tax-payment.description.right',
      path: '/2021/despesas/imposto-complementar',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.income-tax-abroad-payment',
      idRight: 'expences.navegation.option.income-tax-abroad-payment.right',
      description:
        'expences.navegation.option.income-tax-abroad-payment.description',
      rightDescription:
        'expences.navegation.option.income-tax-abroad-payment.description.right',
      path: '/2021/despesas/imposto-de-renda-exterior',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.carne-leao-payment',
      idRight: 'expences.navegation.option.carne-leao-payment.right',
      description: 'expences.navegation.option.carne-leao-payment.description',
      rightDescription:
        'expences.navegation.option.carne-leao-payment.description.right',
      path: '/2021/despesas/imposto-de-renda',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.payment-cash-book-expenses',
      idRight: 'expences.navegation.option.payment-cash-book-expenses.right',
      description:
        'expences.navegation.option.payment-cash-book-expenses.description',
      rightDescription:
        'expences.navegation.option.payment-cash-book-expenses.description.right',
      path: '/2021/arrecadacao/autonomo-fluxo-de-caixa',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.paying-self-employed-expenses',
      idRight: 'expences.navegation.option.paying-self-employed-expenses.right',
      description:
        'expences.navegation.option.paying-self-employed-expenses.description',
      rightDescription:
        'expences.navegation.option.paying-self-employed-expenses.description.right',
      path: '/2021/arrecadacao/autonomo-fluxo-de-caixa',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.paying-freelance-expenses',
      idRight: 'expences.navegation.option.paying-freelance-expenses.right',
      description:
        'expences.navegation.option.paying-freelance-expenses.description',
      rightDescription:
        'expences.navegation.option.paying-freelance-expenses.description.right',
      path: '/2021/arrecadacao/autonomo-fluxo-de-caixa',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.other-payments',
      idRight: 'expences.navegation.option.other-payments.right',
      description: 'expences.navegation.option.other-payments.description',
      rightDescription:
        'expences.navegation.option.other-payments.description.right',
      path: '/2021/despesas/pagamentos-diversos',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.rental',
      idRight: 'expences.navegation.option.rental.right',
      description: 'expences.navegation.option.rental.description',
      rightDescription: 'expences.navegation.option.rental.description.right',
      path: '/2021/despesas/pagamentos-diversos',
      featured: true,
      activated: false,
    },
    {
      id: 'expences.navegation.option.donation',
      idRight: 'expences.navegation.option.donation.right',
      description: 'expences.navegation.option.donation.description',
      rightDescription: 'expences.navegation.option.donation.description.right',
      path: '/2021/despesas/pagamentos-diversos',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.hiring-professional',
      idRight: 'expences.navegation.option.hiring-professional.right',
      description: 'expences.navegation.option.hiring-professional.description',
      rightDescription:
        'expences.navegation.option.hiring-professional.description.right',
      path: '/2021/despesas/pagamentos-diversos',
      featured: false,
      activated: false,
    },
    {
      id: 'expences.navegation.option.hiring-lawyer',
      idRight: 'expences.navegation.option.hiring-lawyer.right',
      description: 'expences.navegation.option.hiring-lawyer.description',
      rightDescription:
        'expences.navegation.option.hiring-lawyer.description.right',
      path: '/2021/despesas/pagamentos-diversos',
      featured: false,
      activated: false,
    },
  ];
}

export function createFinanceNavegation(): IncomeNavegation {
  return {
    current: -1,
    options: loadFinanceNavegationOptions(),
  };
}

function loadFinanceNavegationOptions(): NavegationOption[] {
  return [
    {
      id: 'finance.navegation.option.gains_financial_investments',
      idRight: 'finance.navegation.option.gains_financial_investments.right',
      description:
        'finance.navegation.option.gains_financial_investments.description',
      rightDescription:
        'finance.navegation.option.gains_financial_investments.description.right',
      path: '/2021/financas/ganhos-financeiros',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.savings_income',
      idRight: 'finance.navegation.option.savings_income.right',
      description: 'finance.navegation.option.savings_income.description',
      rightDescription:
        'finance.navegation.option.savings_income.description.right',
      path: '/2021/financas/ganhos-financeiros',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.dividend_investee',
      idRight: 'finance.navegation.option.dividend_investee.right',
      description: 'finance.navegation.option.dividend_investee.description',
      rightDescription:
        'finance.navegation.option.dividend_investee.description.right',
      path: '/2021/financas/ganhos-financeiros',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.gain_fixed income',
      idRight: 'finance.navegation.option.gain_fixed income.right',
      description: 'finance.navegation.option.gain_fixed income.description',
      rightDescription:
        'finance.navegation.option.gain_fixed income.description.right',
      path: '/2021/financas/ganhos-financeiros',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.gain_oreign_currency',
      idRight: 'finance.navegation.option.gain_oreign_currency.right',
      description: 'finance.navegation.option.gain_oreign_currency.description',
      rightDescription:
        'finance.navegation.option.gain_oreign_currency.description.right',
      path: '/2021/financas/ganhos-financeiros',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.gain_income_fund',
      idRight: 'finance.navegation.option.gain_income_fund.right',
      description: 'finance.navegation.option.gain_income_fund.description',
      rightDescription:
        'finance.navegation.option.gain_income_fund.description.right',
      path: '/2021/financas/ganhos-financeiros',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.variable_Income',
      idRight: 'finance.navegation.option.variable_Income.right',
      description: 'finance.navegation.option.variable_Income.description',
      rightDescription:
        'finance.navegation.option.variable_Income.description.right',
      path: '/2021/financas/renda-variavel',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.compensation_variable_income',
      idRight: 'finance.navegation.option.compensation_variable_income.right',
      description:
        'finance.navegation.option.compensation_variable_income.description',
      rightDescription:
        'finance.navegation.option.compensation_variable_income.description.right',
      path: '/2021/financas/renda-variavel',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.gains_variable_income',
      idRight: 'finance.navegation.option.gains_variable_income.right',
      description:
        'finance.navegation.option.gains_variable_income.description',
      rightDescription:
        'finance.navegation.option.gains_variable_income.description.right',
      path: '/2021/financas/renda-variavel',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.real_estate_fund',
      idRight: 'finance.navegation.option.real_estate_fund.right',
      description: 'finance.navegation.option.real_estate_fund.description',
      rightDescription:
        'finance.navegation.option.real_estate_fund.description.right',
      path: '/2021/financas/renda-variavel',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.common_operations',
      idRight: 'finance.navegation.option.common_operations.right',
      description: 'finance.navegation.option.common_operations.description',
      rightDescription:
        'finance.navegation.option.common_operations.description.right',
      path: '/2021/financas/renda-variavel',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.day_trade',
      idRight: 'finance.navegation.option.day_trade.right',
      description: 'finance.navegation.option.day_trade.description',
      rightDescription: 'finance.navegation.option.day_trade.description.right',
      path: '/2021/financas/renda-variavel',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.stock_xchange',
      idRight: 'finance.navegation.option.stock_xchange.right',
      description: 'finance.navegation.option.stock_xchange.description',
      rightDescription:
        'finance.navegation.option.stock_xchange.description.right',
      path: '/2021/financas/renda-variavel',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.bitcoin',
      idRight: 'finance.navegation.option.bitcoin.right',
      description: 'finance.navegation.option.bitcoin.description',
      rightDescription: 'finance.navegation.option.bitcoin.description.right',
      path: '/2021/financas/renda-variavel',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.cryptocurrencies',
      idRight: 'finance.navegation.option.cryptocurrencies.right',
      description: 'finance.navegation.option.cryptocurrencies.description',
      rightDescription:
        'finance.navegation.option.cryptocurrencies.description.right',
      path: '/2021/financas/renda-variavel',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.vgbl',
      idRight: 'finance.navegation.option.vgbl.right',
      description: 'finance.navegation.option.vgbl.description',
      rightDescription: 'finance.navegation.option.vgbl.description.right',
      path: '/2021/financas/renda-variavel',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.bank_account',
      idRight: 'finance.navegation.option.bank_account.right',
      description: 'finance.navegation.option.bank_account.description',
      rightDescription:
        'finance.navegation.option.bank_account.description.right',
      path: '/2021/financas/bens-financeiros',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.investment_funds',
      idRight: 'finance.navegation.option.investment_funds.right',
      description: 'finance.navegation.option.investment_funds.description',
      rightDescription:
        'finance.navegation.option.investment_funds.description.right',
      path: '/2021/financas/bens-financeiros',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.Cash',
      idRight: 'finance.navegation.option.Cash.right',
      description: 'finance.navegation.option.Cash.description',
      rightDescription: 'finance.navegation.option.Cash.description.right',
      path: '/2021/financas/bens-financeiros',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.other_finance_assets',
      idRight: 'finance.navegation.option.other_finance_assets.right',
      description: 'finance.navegation.option.other_finance_assets.description',
      rightDescription:
        'finance.navegation.option.other_finance_assets.description.right',
      path: '/2021/financas/bens-financeiros',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.Shares',
      idRight: 'finance.navegation.option.Shares.right',
      description: 'finance.navegation.option.Shares.description',
      rightDescription: 'finance.navegation.option.Shares.description.right',
      path: '/2021/financas/bens-financeiros',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.Loan made',
      idRight: 'finance.navegation.option.Loan made.right',
      description: 'finance.navegation.option.Loan made.description',
      rightDescription: 'finance.navegation.option.Loan made.description.right',
      path: '/2021/financas/dividas',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.financing',
      idRight: 'finance.navegation.option.financing.right',
      description: 'finance.navegation.option.financing.description',
      rightDescription: 'finance.navegation.option.financing.description.right',
      path: '/2021/financas/dividas',
      featured: true,
      activated: false,
    },
    {
      id: 'finance.navegation.option.debt',
      idRight: 'finance.navegation.option.debt.right',
      description: 'finance.navegation.option.debt.description',
      rightDescription: 'finance.navegation.option.debt.description.right',
      path: '/2021/financas/dividas',
      featured: false,
      activated: false,
    },
    {
      id: 'finance.navegation.option.fies',
      idRight: 'finance.navegation.option.fies.right',
      description: 'finance.navegation.option.fies.description',
      rightDescription: 'finance.navegation.option.fies.description.right',
      path: '/2021/financas/dividas',
      featured: false,
      activated: false,
    },
  ];
}

export function createAssetNavegation(): IncomeNavegation {
  return {
    current: -1,
    options: loadAssetNavegationOptions(),
  };
}

function loadAssetNavegationOptions(): NavegationOption[] {
  return [
    {
      id: 'asset.navegation.option.house',
      idRight: 'asset.navegation.option.house.right',
      description: 'asset.navegation.option.house.description',
      rightDescription: 'asset.navegation.option.house.description.right',
      path: '/2021/meus-bens/bens-nao-rurais',
      featured: true,
      activated: false,
    },
    {
      id: 'asset.navegation.option.apartment',
      idRight: 'finance.navegation.option.fies.right',
      description: 'finance.navegation.option.fies.description',
      rightDescription: 'finance.navegation.option.fies.description.right',
      path: '/2021/meus-bens/bens-nao-rurais',
      featured: true,
      activated: false,
    },
    {
      id: 'asset.navegation.option.car',
      idRight: 'asset.navegation.option.car.right',
      description: 'asset.navegation.option.car.description',
      rightDescription: 'asset.navegation.option.car.description.right',
      path: '/2021/meus-bens/bens-nao-rurais',
      featured: true,
      activated: false,
    },
    {
      id: 'asset.navegation.option.land',
      idRight: 'asset.navegation.option.land.right',
      description: 'asset.navegation.option.land.description',
      rightDescription: 'asset.navegation.option.land.description.right',
      path: '/2021/meus-bens/bens-nao-rurais',
      featured: false,
      activated: false,
    },
    {
      id: 'asset.navegation.option.commercial',
      idRight: 'asset.navegation.option.commercial.right',
      description: 'asset.navegation.option.commercial.description',
      rightDescription: 'asset.navegation.option.commercial.description.right',
      path: '/2021/meus-bens/bens-nao-rurais',
      featured: false,
      activated: false,
    },
    {
      id: 'asset.navegation.option.other_property',
      idRight: 'asset.navegation.option.other_property.right',
      description: 'asset.navegation.option.other_property.description',
      rightDescription:
        'asset.navegation.option.other_property.description.right',
      path: '/2021/meus-bens/bens-nao-rurais',
      featured: false,
      activated: false,
    },
    {
      id: 'asset.navegation.option.other_assets',
      idRight: 'asset.navegation.option.other_assets.right',
      description: 'asset.navegation.option.other_assets.description',
      rightDescription:
        'asset.navegation.option.other_assets.description.right',
      path: '/2021/meus-bens/bens-nao-rurais',
      featured: false,
      activated: false,
    },
    {
      id: 'asset.navegation.option.apartment_purchase',
      idRight: 'asset.navegation.option.apartment_purchase.right',
      description: 'asset.navegation.option.apartment_purchase.description',
      rightDescription:
        'asset.navegation.option.apartment_purchase.description.right',
      path: '/2021/meus-bens/compra',
      featured: true,
      activated: false,
    },
    {
      id: 'asset.navegation.option.apartment_sold',
      idRight: 'finance.navegation.option.fies.right',
      description: 'finance.navegation.option.fies.description',
      rightDescription: 'finance.navegation.option.fies.description.right',
      path: '/2021/meus-bens/vendas',
      featured: true,
      activated: false,
    },
    {
      id: 'asset.navegation.option.heritage',
      idRight: 'asset.navegation.option.heritage.right',
      description: 'asset.navegation.option.heritage.description',
      rightDescription: 'asset.navegation.option.heritage.description.right',
      path: '/2021/meus-bens/herancas',
      featured: true,
      activated: false,
    },
  ];
}
