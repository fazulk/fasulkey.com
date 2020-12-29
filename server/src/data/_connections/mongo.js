import mongodb from 'mongodb'
import { config } from '../../config.js'

const MongoClient = mongodb.MongoClient

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const client = new MongoClient(config.MONGO_URI, options)

export const makeDb = async dbName => {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

export const fasulkeyDb = () => makeDb(`fasulkey`)
