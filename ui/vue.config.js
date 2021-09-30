module.exports = {
    devServer: {
        disableHostCheck: true,
        ...(process.env.SERVER
            ? // Proxy API endpoints to the production base URL if necessary
              {
                  proxy: {
                      '/graphql': {
                          target: `http://localhost:3000`
                      }
                  }
              }
            : // Proxy API endpoints a local mock API.
              { before: require(`./__test__/mock_api`) })
    }
}
