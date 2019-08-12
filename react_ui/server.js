const express = require(`express`)
const app = express()
const port = 8080

app.get(`/test`, (req, res) => {
    res.json(`good`)
})

app.use(express.static(`build`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
