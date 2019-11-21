class Server {
    static healthCheck(ctx, next) {
        ctx.status = 200
        ctx.body = `API UP ${new Date()}`
    }

    static redirect(ctx, next) {
        ctx.redirect(`http://geocities.page`)
    }
}

module.exports = Server
