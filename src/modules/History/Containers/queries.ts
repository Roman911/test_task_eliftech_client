import { gql } from '@apollo/client'

export const USER_ALL = gql`
  query users($input: SearchInput!){
    users(input: $input) {
      _id
      totalPrice
      products {
        name
        price
        img
      }
    }
  }
`;