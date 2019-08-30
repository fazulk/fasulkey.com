module.exports = {
    lintOnSave: false,
    devServer: {
        // https: {
        //   key: fs.readFileSync(`../cert/localhost.key`),
        //   cert: fs.readFileSync(`../cert/localhost.crt`)
        // },
        public: `0.0.0.0:8080`,
        open: true,
        proxy: {
            '/api': {
                target: `http://0.0.0.0:3000`,
                secure: false
            }
        }
    }
}
