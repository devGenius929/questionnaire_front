import { gql } from '@apollo/client';
export const DECLARANT_QUERY = gql`
  query declarant($uuid: String) {
    declarant(uuid: $uuid) {
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
`;
