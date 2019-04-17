import React from 'react'
import { NavLink, Card, Button } from 'layout'
import { Query, Mutation } from 'react-apollo'
import getLab from './getLab.gql'
import deleteLab from './deleteLab.gql'
import { Redirect } from 'react-router-dom'

const Lab = ({ match }) => {
  const { id } = match.params
  return (
    <Query query={getLab} variables={{ id }}>
      {({ data }) => {
        if (!data || !data.lab) return <div>Loading...</div>
        const { name } = data.lab
        return (
          <Card>
            <div>{name}</div>
            <NavLink to={`/labs/${id}/edit`}>Edit this lab</NavLink>
            <Mutation mutation={deleteLab}>
              {(removeLab, { data, error }) => {
                if (error) {
                  return (
                    <Redirect
                      to={{
                        pathname: '/error',
                        state: { error: 'Ops', parent: '/labs' }
                      }}
                    />
                  )
                }
                if (data) {
                  return (
                    <Redirect
                      to={{
                        pathname: '/success',
                        state: {
                          name: name + ' Lab',
                          parent: '/labs'
                        }
                      }}
                    />
                  )
                }
                return (
                  <Button onClick={() => removeLab({ variables: { id } })}>
                    X
                  </Button>
                )
              }}
            </Mutation>
          </Card>
        )
      }}
    </Query>
  )
}

export default Lab
