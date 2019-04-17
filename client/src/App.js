import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { Home, Labs } from './pages'
import { SuccessPage, ErrorPage } from './pages/common'

const App = () => {
  return (
    <Router>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/labs">Labs</NavLink>
      <Route exact path="/" component={Home} />
      <Route path="/labs" component={Labs} />
      <Route path="/success" component={SuccessPage} />
      <Route path="/error" component={ErrorPage} />
    </Router>
  )
}

export default App
