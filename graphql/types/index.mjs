import merge from 'merge-graphql-schemas';
const mergeTypes = merge.mergeTypes

import User from './user'

const typeDefs = [User]

export default mergeTypes(typeDefs, { all: true })
