const { mergeResolvers } = require(`merge-graphql-schemas`)

const User = require(`./user`)

const resolvers = [User]

module.exports = mergeResolvers(resolvers)
