const express = require(`express`)
const app = express()
const port = 8080
const history = require(`connect-history-api-fallback`)

app.use(express.static(`./dist`))
app.use(
    history({
        disableDotRule: true,
        verbose: false
    })
)
app.use(express.static(`./dist`))

app.get(`/test`, (req, res) => {
    res.json(`vue_ui up`)
})

app.listen(port, () =>
    console.log(`Example app listening on port http://localhost:${port}!`)
)
