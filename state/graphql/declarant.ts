import { GraphQLClient, gql } from 'graphql-request';
import { GRAPHQL_URL } from '../../utils/config';
import { Session, Person } from '../../typing';
import { ActionName } from '../store';

/**
 * Fetch the declarant data from GraphQL and send it to our state.
 *
 * @param session contains all the data related to the current user session (including token).
 */
export function fetchDeclarant(session: Session) {
  return async (dispatch, getState) => {
    const state = getState();
    const auth = session ?? state.session;

    if (typeof auth === 'undefined') return;

    const query = gql`
      query coreFamily($uuid: String) {
        coreFamily(uuid: $uuid) {
          declarant {
            uuid
            nickName
            name
            telephone {
              ddd
              phoneNumber
            }
            mobile {
              ddd
              phoneNumber
            }
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
            partner {
              uuid
              nickName
              relationship
            }
            dependants {
              uuid
              nickName
              relationship
            }
          }
        }
      }
    `;

    const graphQLClient = new GraphQLClient(GRAPHQL_URL, {
      headers: {
        authorization: auth.accessToken,
      },
    });

    const response = await graphQLClient.request(query, {
      uuid: auth.user.sub,
    });

    dispatch({
      type: ActionName.UpdateDeclarant,
      payload: response.coreFamily.declarant,
    });
  };
}

/**
 * Save the declarant in GraphQL.
 *
 * @param session contains all the data related to the current user session (including token).
 */
export function saveDeclarant(session: Session) {
  return async (dispatch, getState) => {
    const state = getState();
    const auth = session ?? state.session;

    if (typeof auth === 'undefined') return;

    const query = gql`
      mutation syncCoreFamily($declarant: DeclarantInput) {
        syncCoreFamily(declarant: $declarant) {
          success
          declarant {
            uuid
            nickName
            name
            telephone {
              ddd
              phoneNumber
            }
            mobile {
              ddd
              phoneNumber
            }
            cpf
            voterRegistration
            address {
              uuid
              changedAddress
              street
            }
          }
        }
      }
    `;

    const graphQLClient = new GraphQLClient(GRAPHQL_URL, {
      headers: {
        authorization: auth.accessToken,
      },
    });

    const declarant: Person = getState().declarant;

    const response = await graphQLClient.request(query, { declarant });

    if (response.addDeclarant?.success) {
      dispatch({
        type: ActionName.UpdateDeclarant,
        payload: response.declarant,
      });
    }
  };
}
