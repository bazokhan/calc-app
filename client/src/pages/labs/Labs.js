import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Create from './create'

const Labs = () => {
  return (
    <div>
      <NavLink to="/labs/create">Create</NavLink>

        <Route path="/labs/create" component={Create} />

    </div>
  )
}

export default Labs
