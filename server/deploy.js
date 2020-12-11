import ghpages from 'gh-pages'

ghpages.publish(
    `.`,
    {
        branch: `production-api`,
        src: [`src/**/*`, `Dockerfile`, `package*.json`]
    },
    function(err) {
        if (err) console.error(err)
        else console.log(`done`)
    }
)
