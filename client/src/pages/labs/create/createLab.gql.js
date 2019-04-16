import gql from 'graphql-tag'

const createLab = gql`
  mutation ADD_LAB($name: String!) {
    addLab(name: $name) {
      id
      name
    }
  }
`

export default createLab
