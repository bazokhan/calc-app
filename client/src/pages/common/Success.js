import React from 'react'
import { NavLink } from 'react-router-dom'

const SuccessPage = ({ location, history }) => {
    if (!location || !location.state) {
        return <div>
            <div>Success</div>
            <button onClick={history.goBack}>Go Back</button>
            <NavLink to="/">Go Home</NavLink>
        </div>
    }

    if (location && location.state) {
        return <div>
            <div>Success, {location.state.name} created</div>
            <button onClick={history.goBack}>Go Back To {location.state.parent}</button>
            <NavLink to="/">Go Home</NavLink>
        </div>
    }
}

export default SuccessPage