import express from 'express'
import path from 'path'
import fs from 'fs'

let get_all_with_index_filter = async (dir, ignore_array = []) => {
        
    let contents = []

    for (let x of fs.readdirSync(path.resolve(dir))) {
        if (x !== `index.js` && x !== `require_all_subs.js` && !ignore_array.includes(x)) {            
            const module = (await import('./' + x)).default
                if (Object.getPrototypeOf(module) == express.Router)                    
                    contents.push(module)                               
        }
    }      
    
    return Promise.resolve(contents)
}

export default get_all_with_index_filter
