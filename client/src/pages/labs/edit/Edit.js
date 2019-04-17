import React, { useState } from 'react'
import { Mutation, Query } from 'react-apollo'
import patchLab from './patchLab.gql'
import { Redirect } from 'react-router-dom'
import getLab from '../lab/getLab.gql'

import {Button} from 'layout'

const Edit = ({ match }) => {
    const { id } = match.params
    const [name, setName] = useState('')
    let nameInput
    return (
        <Mutation mutation={patchLab}>
            {(editLab, { data, error }) => {
                if (error) {
                    return <Redirect to={{ pathname: '/error', state: { error: 'Ops', parent: '/labs' } }} />
                }
                if (data && data.editLab) {
                    return <Redirect to={{ pathname: '/success', state: { name: data.editLab.name + ' Lab', parent: '/labs' } }} />
                }
                return (
                    <div>
                        <Query query={getLab} variables={{id}}>
                            {({ data }) => {
                                if (!data || !data.lab) return <div>Loading...</div>
                                return <div>{data.lab.name}</div>
                            }}
                        </Query>
                        <form
                            onSubmit={e => {
                                e.preventDefault()
                                editLab({ variables: { id, name } })
                                nameInput.value = ''
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Lab Name"
                                ref={node => {
                                    nameInput = node
                                }}
                                onChange={e => {
                                    setName(e.target.value)
                                }}
                            />
                            <Button type="submit">Edit</Button>
                        </form>
                    </div>
                )
            }}
        </Mutation>
    )
}

export default Edit
