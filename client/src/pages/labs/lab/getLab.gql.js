import gql from 'graphql-tag'

const getLab = gql`
  query LAB($id: ID!) {
    lab(id: $id) {
      id
      name
    }
  }
`

export default getLab
