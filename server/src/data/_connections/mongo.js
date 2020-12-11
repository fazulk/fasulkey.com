import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
console.log(process.env.NODE_ENV)
const url =
    process.env.NODE_ENV === `development`
        ? `mongodb://localhost:27017/fasulkey`
        : `mongodb+srv://keyb0ard:${process.env.MONGO_PW}@topazcluster.p7xiq.mongodb.net/fasulkey?retryWrites=true&w=majority`

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const client = new MongoClient(url, options)

export const makeDb = async dbName => {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

export const fasulkeyDb = () => makeDb(`fasulkey`)
