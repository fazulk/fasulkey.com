import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

export const apolloClient = new ApolloClient({
    uri:
        process.env.NODE_ENV !== `production`
            ? `http://testsite.com:3000/graphql`
            : `https://fasulkey-api-o6nhp6r2oq-uc.a.run.app/graphql`
})

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})
