const { mergeTypes } = require(`merge-graphql-schemas`)

const User = require(`./user`)

const typeDefs = [User]

module.exports = mergeTypes(typeDefs, { all: true })
