import React from 'react'
import { Button, Card, NavLink } from 'layout'

const SuccessPage = ({ location, history }) => {
  if (!location || !location.state) {
    return (
      <Card>
        <div>Success</div>
        <Button onClick={history.goBack}>Go Back</Button>
        <NavLink to="/">Go Home</NavLink>
      </Card>
    )
  }

  if (location && location.state) {
    return (
      <Card>
        <div>Success, {location.state.name} created</div>
        <NavLink to={location.state.parent}>
          Go Back To {location.state.parent}
        </NavLink>
        <NavLink to="/">Go Home</NavLink>
      </Card>
    )
  }
}

export default SuccessPage
