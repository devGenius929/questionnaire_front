import { gql } from '@apollo/client';
export const DECLARATION_QUERY = gql`
  query declaratio($uuid: String) {
    declaration(uuid: $uuid) {
      uuid
      lastTaxReturnReceipt
      rectification
      incomes {
        salaryWork {
          jobs {
            personUuid
            employerName
            cpfCnPJ
            annualGrossIncome
            officialPension
            tax
            extraSalary
          }
        }
        freelance {
          incomeFromForeignerCompany {
            personUuid
            income {
              january
              february
              march
              april
              may
              june
              july
              august
              september
              octuber
              november
              december
            }
          }
          incomeFromCompany {
            personUuid
            companyName
            cnpj
            totalAnnual
            tax
            officialPension
          }
          cashBookExpense {
            personUuid
            income {
              january
              february
              march
              april
              may
              june
              july
              august
              september
              octuber
              november
              december
            }
          }
        }
        ownCompany {
          personUuid
          companyName
          cnpj
          annualProLabore
          officialPension
          tax
          dividends
        }
        farming {
          incomeExpenses {
            personUuid
            incomes {
              january
              february
              march
              april
              may
              june
              july
              august
              september
              octuber
              november
              december
            }
            expenses {
              january
              february
              march
              april
              may
              june
              july
              august
              september
              octuber
              november
              december
            }
            familyProperty
            foreignOrigin
            country
            moneyExchange
            advanceTwoYearsAgo
            advanceOneYearsAgo
          }
          accumulatedLoss {
            personUuid
            loss
            familyPropertyRelated
            foreignRelated
          }
        }
        retirement {
          personUuid
          payerName
          cnpj
          taxableIncome
          nonTaxableIncome
          taxPaid
          extraSalary
          pensionPaid
          fullExemption
        }
        socialSecurityWithdrawal {
          personUuid
          kind
          companyName
          cnpj
          amount
          tax
        }
        alimony {
          personUuid
          cashFlow {
            january
            february
            march
            april
            may
            june
            july
            august
            september
            octuber
            november
            december
          }
          foreignOrigin
        }
        rental {
          privateRentals {
            personUuid
            cashFlow {
              january
              february
              march
              april
              may
              june
              july
              august
              september
              octuber
              november
              december
            }
            foreignOrigin
            familyProperty
          }
          companyRentals {
            personUuid
            companyName
            cnpj
            tax
            familyProperty
          }
        }
        accumulatedIncome {
          personUuid
          payer
          cpfCnPJ
          income
          pension
          tax
          alimony
          alimonyReceiverUuid
          receivedAt
          accumulationPeriod
        }
        miscellaneousIncome {
          foreignIncomes {
            personUuid
            income {
              january
              february
              march
              april
              may
              june
              july
              august
              september
              octuber
              november
              december
            }
          }
          incomes {
            personUuid
            kind
            description
            amount
          }
        }
      }
    }
  }
`;
