module.exports = {
    devServer: {
        public: `testsite.com:8080`,
        disableHostCheck: true,
        ...(process.env.SERVER
            ? // Proxy API endpoints to the production base URL if necessary
              {
                  proxy: {
                      '/graphql': {
                          target: `http://testsite.com:3000`
                      }
                  }
              }
            : // Proxy API endpoints a local mock API.
              { before: require(`./__test__/mock_api`) })
    }
}
