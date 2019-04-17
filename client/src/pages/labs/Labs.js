import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Create from './create'
import Lab from './lab';
import Edit from './edit'
import List from './list';

const Labs = () => {
  return (
    <div>
      <NavLink to="/labs/create">Create New Lab</NavLink>
      <Route exact path="/labs" component={List} />
      <Route path="/labs/create" component={Create} />
      <Route path="/labs/:id" component={Lab} />
      <Route path="/labs/:id/edit" component={Edit} />
    </div>
  )
}

export default Labs
