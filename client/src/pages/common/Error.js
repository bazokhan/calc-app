import React from 'react'
import { Button, Card, NavLink } from 'layout'

const ErrorPage = ({ location, history }) => {
  if (!location || !location.state) {
    return (
      <Card>
        <div>Error</div>
        <Button onClick={history.goBack}>Go Back</Button>
        <NavLink to="/">Go Home</NavLink>
      </Card>
    )
  }

  if (location && location.state) {
    return (
      <Card>
        <div>Error, {location.state.error}</div>
        <NavLink to={location.state.parent}>
          Go Back To {location.state.parent}
        </NavLink>
        <NavLink to="/">Go Home</NavLink>
      </Card>
    )
  }
}

export default ErrorPage
