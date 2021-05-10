import { gql } from '@apollo/client';
import { DECLARANT_QUERY } from '../queries/declarant';

export const DECLARANT_MUTATION = gql`
  mutation AddDeclarant($declarant: DeclarantInput) {
    addDeclarant(declarant: $declarant) {
      success
      declarant {
        uuid
        nickName
        firstName
        lastName
        dateOfBirth
        cpf
        voterRegistration
        address {
          uuid
          changedAddress
          street
          house
          complement
          neighbourhood
          country
          state
          city
          zip
          phoneCode
          phoneNumber
        }
        occupation {
          nature
          occupation
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
    const addedDeclarant = data?.addDeclarant.declarant;
    if (addedDeclarant) {
      cache.writeQuery({
        query: DECLARANT_QUERY,
        variables: { uuid: addedDeclarant.uuid },
        data: {
          declarant: addedDeclarant,
        },
      });
    }
  },
};
