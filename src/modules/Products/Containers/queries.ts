import { gql } from '@apollo/client'

export const PRODUCTS = gql`
  query products($shop: String!){
    products(shop: $shop) {
      _id
      name
      description
    }
  }
`;