import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Query } from 'react-apollo'
import Create from './create'
import Lab from './lab';
import Edit from './edit'
import getAllLabs from './getAllLabs.gql';

const Labs = () => {
  return (
    <div>
      <NavLink to="/labs/create">Create New Lab</NavLink>
      <Query query={getAllLabs}>
        {({ data }) => {
          if (!data || !data.labs) return <div>Loading...</div>
          return data.labs.map(lab => {
            return (<div key={lab.id}><div>{lab.id}: {lab.name}</div><NavLink to={`/labs/${lab.id}`}>Edit</NavLink></div>)
          })
        }}
      </Query>
      <Route path="/labs/create" component={Create} />
      <Route path="/labs/:id" component={Lab} />
      <Route path="/labs/:id/edit" component={Edit} />
    </div>
  )
}

export default Labs
