import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import createLab from './createLab.gql'

const Create = () => {
  const [name, setName] = useState('')
  let nameInput
  return (
    <Mutation mutation={createLab}>
      {(addLab, { data }) => {
        return (
          <form
            onSubmit={e => {
              e.preventDefault()
              addLab({ variables: { name } })
              nameInput.value = ''
            }}
          >
            <input
              type="text"
              placeholder="Lab Name"
            //   value={name}
              ref={node => {
                nameInput = node
              }}
              onChange={e => {
                setName(e.target.value)
              }}
            />
            <button type="submit">Create</button>
          </form>
        )
      }}
    </Mutation>
  )
}

export default Create
