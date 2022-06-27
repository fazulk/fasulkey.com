export function buildResume({ fasulkeyDb }: any) {
  return Object.freeze({
    getResume,
  })

  async function getResume({ type }: { type: string }) {
    const db = await fasulkeyDb()
    return db.collection(`resume`).find({ type }).project({ _id: 0 }).toArray()
  }
}
