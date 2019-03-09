let copy = require('copy')

copy('./build/**', '../server/public', function (err, files) {
    if (err) throw err;
    // `files` is an array of the files that were copied
})
