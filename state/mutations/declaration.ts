import { gql } from '@apollo/client';
import { DECLARATION_QUERY } from '../queries/declaration';

export const DECLARATION_MUTATION = gql`
  mutation addDeclaration($declaration: DeclarationInput) {
    addDeclaration(declaration: $declaration) {
      success
      declaration {
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
  }
`;

/**
 * Invalidates the cache for the query DECLARATION_QUERY after executing
 * the addDeclaration mutation.
 */
export const cacheInvalidator = {
  update(cache, { data }) {
    const addedDeclaration = data?.addDeclaration.declaration;
    if (addedDeclaration) {
      cache.writeQuery({
        query: DECLARATION_QUERY,
        variables: {
          uuid: addedDeclaration.uuid,
        },
        data: {
          declaration: addedDeclaration,
        },
      });
    }
  },
};
