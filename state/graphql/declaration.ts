import { GraphQLClient, gql } from 'graphql-request';
import { GRAPHQL_URL } from '../../utils/config';
import { Session, Declaration } from '../../typing';
import { ActionName } from '../store';

/**
 * Fetch the freelance data from GraphQL.
 *
 * @param session contains all the data related to the current user session (including token).
 */
export function fetchDeclaration(session: Session) {
  return async (dispatch, getState) => {
    const state = getState();
    const auth = session ?? state.session;

    if (typeof auth === 'undefined') return;

    const query = gql`
      query declaration($uuid: String) {
        declaration(uuid: $uuid) {
          uuid
          declarantUuid
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
    if (response.errors) {
      console.error('Error fetching declaration: ', response.errors);
      return;
    }

    console.log('response: ', response);

    dispatch({
      type: ActionName.UpdateDeclaration,
      payload: response.declaration,
    });
  };
}

/**
 * Save the declarant's partner data in GraphQL.
 *
 * @param session contains all the data related to the current user session (including token).
 */
export function saveDeclaration(session: Session) {
  return async (dispatch, getState) => {
    const state = getState();
    const auth = session ?? state.session;

    if (typeof auth === 'undefined') return;

    const query = gql`
      mutation addDeclaration($declaration: DeclarationInput) {
        addDeclaration(declaration: $declaration) {
          success
          declaration {
            uuid
            declarantUuid
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

    const declaration: Declaration = getState().declaration;

    if (declaration) {
      const response = await graphQLClient.request(query, {
        declaration: {
          uuid: declaration.uuid,
          declarantUuid: auth.user.sub,
          lastTaxReturnReceipt: declaration.lastTaxReturnReceipt,
          rectification: declaration.rectification,
          incomes: declaration.incomes,
        },
      });

      if (response.partner) {
        dispatch({ type: ActionName.UpdatePartner, payload: response.partner });
      }
    }
  };
}
