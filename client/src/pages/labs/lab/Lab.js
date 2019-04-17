import React from 'react'
import { NavLink } from 'react-router-dom'
import { Query } from 'react-apollo'
import getLab from './getLab.gql'

const Lab = ({ match }) => {
    const { id } = match.params
    return (
        <div>
            <Query query={getLab} variables={{ id }}>
                {({ data }) => {
                    if (!data || !data.lab) return <div>Loading...</div>
                    return <div>{data.lab.name}</div>
                }}
            </Query>
            <NavLink to={`/labs/${id}/edit`}>Edit this lab</NavLink>
        </div>
    )
}

export default Lab
