module.exports = app => {
    app.post(`/blah`, (req, res) => {
        res.sendStatus(200)
    })
}
