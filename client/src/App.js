import React from 'react'
import './App.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { Home, Labs } from './pages'
import {SuccessPage, ErrorPage} from './pages/common'

// const USERS_QUERY = gql`
//   query {
//     users {
//       id
//       firstName
//       email
//       password
//     }
//   }
// `

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello World</p>
//       </header>

//       <div className="App-intro">
//         <Query query={USERS_QUERY}>
//           {({ data }) => {
//             if (!data) return <div>Loading..</div>
//             console.log(data)
//             return <div>Loaded !</div>
//           }}
//         </Query>
//       </div>
//     </div>
//   )
// }

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
