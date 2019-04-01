const { GraphQLServer } = require('graphql-yoga')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new GraphQLServer({ typeDefs, resolvers })

server
  .start(
    {
      port: process.env.PORT || 3001
    },
    ({ port }) => {
      console.log(
        `${process.env.ENVIRONMENT ||
          'Development'} Server Started At Port ${port}`
      )
      console.log(`Press CTRL + C To Exit..`)
    }
  )
  .catch(err => console.error('connection Error', err))
