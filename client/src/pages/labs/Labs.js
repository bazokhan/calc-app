import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from './create'
import Lab from './lab'
import Edit from './edit'
import List from './list'
import { NavLink } from 'layout'

const Labs = () => {
  return (
    <div>
      <NavLink to="/labs/create">Create New Lab</NavLink>
      <Route exact path="/labs" component={List} />
      <Switch>
        <Route path="/labs/create" component={Create} />
        <Route path="/labs/:id/edit" component={Edit} />
        <Route path="/labs/:id" component={Lab} />
      </Switch>
    </div>
  )
}

export default Labs
