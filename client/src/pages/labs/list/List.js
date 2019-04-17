import React from 'react'
import { NavLink } from 'layout'
import { Query } from 'react-apollo'
import getAllLabs from './getAllLabs.gql'

import { Card } from 'layout'

const List = () => {
  return (
    <Query query={getAllLabs}>
      {({ data }) => {
        if (!data || !data.labs) return <div>Loading...</div>
        return data.labs.map(lab => {
          return (
            <Card key={lab.id}>
              <Card typeName="primary">
                {lab.id}: {lab.name}
              </Card>
              <NavLink to={`/labs/${lab.id}`}>Details</NavLink>
            </Card>
          )
        })
      }}
    </Query>
  )
}

export default List
