import gql from 'graphql-tag'

const getAllLabs = gql`
  query {
    labs {
      id
      name
    }
  }
`

export default getAllLabs
