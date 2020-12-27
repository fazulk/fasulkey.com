const ghpages = require(`gh-pages`)

ghpages.publish(
    `.`,
    {
        branch: `production-ui`,
        src: [
            `__test__/**/*`,
            `src/**/*`,
            `public/**/*`,
            `Dockerfile`,
            `package*.json`,
            `*.config.js`,
            `.browserslistrc`
        ]
    },
    function(err) {
        if (err) console.error(err)
        else console.log(`done`)
    }
)
