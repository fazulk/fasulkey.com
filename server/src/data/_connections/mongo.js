import mongodb from 'mongodb'
// import fs from 'fs'
const MongoClient = mongodb.MongoClient
const url = `mongodb://127.0.0.1:27017`

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

// if (process.env.NODE_ENV === `production`) {
//     const crt = fs.readFileSync(`/var/run/data/user.pem`)

//     options.sslCert = crt
//     options.sslKey = crt
// }

const client = new MongoClient(url, options)

export const makeDb = async dbName => {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

export const fasulkeyDb = () => makeDb(`fasulkey`)
