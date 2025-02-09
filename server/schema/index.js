import { gql } from 'apollo-server'
import * as UserSchema from './User'
import * as PokemonSchema from './Pokemon'

const dTypeDefs = gql`
    type Query {
        hello: String
    }

    type Mutation {
        test: String
    }
`

const dResolvers = {
    Query: {
        hello: () => 'world'
    },
    Mutation: {
        test: () => 'test'
    }
}

const typeDefs = [dTypeDefs, UserSchema.typeDefs, PokemonSchema.typeDefs]
const resolvers = [dResolvers, UserSchema.resolvers, PokemonSchema.resolvers]

export {
    typeDefs,
    resolvers
}