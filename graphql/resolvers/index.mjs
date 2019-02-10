import merge from 'merge-graphql-schemas'
const mergeResolvers = merge.mergeResolvers

import User from './user'

const resolvers = [User]

export default mergeResolvers(resolvers)
