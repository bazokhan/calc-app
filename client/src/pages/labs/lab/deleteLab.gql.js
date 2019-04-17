import gql from 'graphql-tag'

const deleteLab = gql`
  mutation REMOVE_LAB($id: ID!) {
    removeLab(id: $id) {
      id
      name
    }
  }
`

export default deleteLab
