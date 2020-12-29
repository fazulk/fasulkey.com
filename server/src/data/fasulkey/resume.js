export default function({ fasulkeyDb }) {
    return Object.freeze({
        getResume,
        setResume
    })

    async function getResume({ type } = {}) {
        const db = fasulkeyDb()

        const d = await db
            .collection(`resume`)
            .where(`type`, `==`, type)
            .get()
        const results = []
        d.forEach(doc => {
            results.push(doc.data())
        })
        return results
    }

    async function setResume({ type } = {}) {
        const db = fasulkeyDb()

        return await db
            .collection(`resume`)
            .doc()
            .set()
    }
}
