const controllers = require(`require-all`)({
    dirname: __dirname + `/routes`,
    recursive: true
})

console.log(controllers)

module.exports = controllers.customers
