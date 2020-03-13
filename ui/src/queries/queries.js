import { gql } from 'apollo-boost';

export const USERS_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

export const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;
