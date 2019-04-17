import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Labs } from './pages'
import { SuccessPage, ErrorPage } from './pages/common'
import { NavLink } from 'layout'
import Header from './components/header'
import Main from './components/main'

const App = () => {
  return (
    <Router>
      <Header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/labs">Labs</NavLink>
      </Header>
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/labs" component={Labs} />
        <Route path="/success" component={SuccessPage} />
        <Route path="/error" component={ErrorPage} />
      </Main>
    </Router>
  )
}

export default App
