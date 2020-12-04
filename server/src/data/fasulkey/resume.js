export default function({ fasulkeyDb }) {
    return Object.freeze({
        getHistory,
        getBasicInfo
    })

    async function getHistory() {
        const db = await fasulkeyDb()
        return db
            .collection(`resume`)
            .find({ type: { $ne: `basicInfo` } })
            .toArray()
    }

    async function getBasicInfo() {
        const db = await fasulkeyDb()
        return db.collection(`resume`).findOne({
            type: `basicInfo`
        })
    }
}
