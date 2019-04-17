import React from 'react'
import { NavLink } from 'react-router-dom'
import { Query } from 'react-apollo'
import getAllLabs from './getAllLabs.gql';

const List = () => {
    return (
        <Query query={getAllLabs}>
            {({ data }) => {
                if (!data || !data.labs) return <div>Loading...</div>
                return data.labs.map(lab => {
                    return (<div key={lab.id}><div>{lab.id}: {lab.name}</div><NavLink to={`/labs/${lab.id}`}>Details</NavLink></div>)
                })
            }}
        </Query>
    )
}

export default List
