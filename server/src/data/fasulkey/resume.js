export default function({ fasulkeyDb }) {
    return Object.freeze({
        getResume
    })

    async function getResume({ type } = {}) {
        const db = await fasulkeyDb()
        return db
            .collection(`resume`)
            .find({ type })
            .toArray()
    }
}
