import React from 'react'
import { NavLink, Card } from 'layout'
import { Query } from 'react-apollo'
import getLab from './getLab.gql'

const Lab = ({ match }) => {
  const { id } = match.params
  return (
    <div>
      <Query query={getLab} variables={{ id }}>
        {({ data }) => {
          if (!data || !data.lab) return <div>Loading...</div>
          return (
            <Card>
              <div>{data.lab.name}</div>
              <NavLink to={`/labs/${id}/edit`}>Edit this lab</NavLink>
            </Card>
          )
        }}
      </Query>
    </div>
  )
}

export default Lab
