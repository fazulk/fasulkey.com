import { MongoClient } from 'mongodb'

// const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// }

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_DOMAIN}`

const client = new MongoClient(mongoUri)

export const makeDb = async (dbName: string) => {
  await client.connect()
  return client.db(dbName)
}

export const fasulkeyDb = () => makeDb(`fasulkey`)
