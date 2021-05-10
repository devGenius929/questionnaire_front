import { gql } from '@apollo/client';
export const ASPECT_QUERY = gql`
  query aspect($uuid: String) {
    aspect(uuid: $uuid) {
      family {
        hasMarried
        hasDivorced
        hadKids
      }
      profession {
        changedJob
        changedWorkCategory
        startedOwnBusiness
        hasRetired
      }
      assets {
        boughtProperty
        soldProperty
        inheritedProperty
        donatedProperty
      }
      income {
        hadAbnormalIncome
      }
      finance {
        contributedPrevidence
        newInvestments
        investedInFunds
        gotLoan
      }
      expenditure {
        gotHealthPlan
        medicalCosts
        tuition
        alimony
        hiredMaide
        madeDonationWithTaxBenefits
      }
    }
  }
`;
