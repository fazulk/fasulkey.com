import type { Db } from 'mongodb'
import { MongoClient } from 'mongodb'

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_DOMAIN}`

const client = new MongoClient(mongoUri)

export async function makeDb(dbName: string): Promise<Db> {
  await client.connect()
  return client.db(dbName)
}

export function fasulkeyDb() {
  return makeDb('fasulkey')
}
