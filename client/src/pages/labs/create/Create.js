import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import createLab from './createLab.gql'
import { Redirect } from 'react-router-dom'

import {Button, Input} from 'layout'

const Create = () => {
  const [name, setName] = useState('')
  let nameInput
  return (
    <Mutation mutation={createLab}>
      {(addLab, { data, error }) => {
        if (error) {
          return <Redirect to={{ pathname: '/error', state: { error, parent: '/labs' } }} />
        }
        if (data && data.addLab) {
          return <Redirect to={{ pathname: '/success', state: { name: data.addLab.name + ' Lab', parent: '/labs' } }} />
        }
        return (
          <form
            onSubmit={e => {
              e.preventDefault()
              addLab({ variables: { name } })
              nameInput.value = ''
            }}
          >
            <Input
              type="text"
              placeholder="Lab Name"
              ref={node => {
                nameInput = node
              }}
              onChange={e => {
                setName(e.target.value)
              }}
            />
            <Button type="submit">Create</Button>
          </form>
        )
      }}
    </Mutation>
  )
}

export default Create
