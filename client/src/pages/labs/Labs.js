import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from './create'
import Lab from './lab'
import Edit from './edit'
import List from './list'
import { NavLink } from 'layout'
import Header from 'components/header'
import Main from 'components/main'

const Labs = () => {
  return (
    <>
      <Header>
        <NavLink to="/labs/create">Create New Lab</NavLink>
      </Header>
      <Main>
        <Route exact path="/labs" component={List} />
        <Switch>
          <Route path="/labs/create" component={Create} />
          <Route path="/labs/:id/edit" component={Edit} />
          <Route path="/labs/:id" component={Lab} />
        </Switch>
      </Main>
    </>
  )
}

export default Labs
