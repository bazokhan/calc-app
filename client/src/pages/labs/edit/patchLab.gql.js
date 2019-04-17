import gql from 'graphql-tag'

const patchLab = gql`
  mutation EDIT_LAB($id: ID!, $name: String!) {
    editLab(id: $id, name: $name) {
      id
      name
    }
  }
`

export default patchLab
