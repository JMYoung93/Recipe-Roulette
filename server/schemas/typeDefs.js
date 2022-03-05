const { gql } = require('apollo-server-express');

const typeDefs = gql `
type Profile {
    _id: ID
    name: String
    email: String
    password: String
}

type Recipe {
    _id: ID
    title: String
    diet: String
    allergies: String
}

type Query {
    profiles: [Profile]
    me: Profile
    recipes: [Recipe]
}

type Auth {
    token: ID
    profile: Profile
}

type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;