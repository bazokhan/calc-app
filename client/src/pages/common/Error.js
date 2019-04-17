import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = ({ location, history }) => {
    if (!location || !location.state) {
        return <div>
            <div>Error</div>
            <button onClick={history.goBack}>Go Back</button>
            <NavLink to="/">Go Home</NavLink>
        </div>
    }

    if (location && location.state) {
        return <div>
            <div>Error, {location.state.error}</div>
            <NavLink to={location.state.parent}>Go Back To {location.state.parent}</NavLink>
            <NavLink to="/">Go Home</NavLink>
        </div>
    }
}

export default ErrorPage