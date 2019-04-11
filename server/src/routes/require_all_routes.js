const express = require(`express`)
const path = require(`path`)
const fs = require(`fs`)

let get_all_with_index_filter = (dir, ignore_array = []) => {
    let contents = []

    fs.readdirSync(path.resolve(dir)).forEach(x => {
        if (
            x !== `index.js` &&
            x !== `require_all_subs.js` &&
            !ignore_array.includes(x)
        ) {
            try {
                let current = require(`${dir}/${x.split(`.`)[0]}`)
                if (Object.getPrototypeOf(current) == express.Router)
                    contents.push(current)
            } catch (err) {
                console.error(err)
            }
        }
    })

    return contents
}

module.exports = get_all_with_index_filter
