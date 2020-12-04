import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

export const apolloClient = new ApolloClient({
    uri: `http://testsite.com:3000/graphql`
})

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})
