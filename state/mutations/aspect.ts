import { gql } from '@apollo/client';
import { ASPECT_QUERY } from '../queries/aspect';

export const ASPECT_MUTATION = gql`
  mutation AddAspect($yearAspect: YearAspectInput) {
    addYearAspect(yearAspect: $yearAspect) {
      success
      aspects {
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
  }
`;

/**
 * Invalidates the cache for the query DECLARANT_QUERY after executing
 * the addDeclarant mutation.
 */
export const cacheInvalidator = {
  update(cache, { data }) {
    const addedAspect = data?.addYearAspect.aspects;
    if (addedAspect) {
      cache.writeQuery({
        query: ASPECT_QUERY,
        variables: { uuid: addedAspect.uuid },
        data: {
          aspects: addedAspect,
        },
      });
    }
  },
};
