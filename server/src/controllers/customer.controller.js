class Customer {
    static getCustomer(ctx, next) {
        ctx.status = 200
        ctx.body = `API UP ${new Date()}`
    }
}

module.exports = Customer
