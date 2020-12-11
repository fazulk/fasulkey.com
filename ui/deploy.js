const ghpages = require(`gh-pages`)

ghpages.publish(
    `dist`,
    {
        branch: `production-ui`
    },
    function(err) {
        if (err) console.error(err)
        else console.log(`done`)
    }
)
