export default function({ fasulkeyDb }) {
    return Object.freeze({
        getResume,
        setResume
    })

    async function getResume({ type } = {}) {
        const db = await fasulkeyDb()
        const results = await db
            .collection(`resume`)
            .find({ type })
            .toArray()

        return results
            .map(e => {
                const [month, year] = (`` + e.endDate).split(`-`)
                e.sortDate = e.endDate ? new Date(year, month - 1) : new Date()
                return e
            })
            .sort((a, b) => b.sortDate - a.sortDate)
    }

    async function setResume({ type } = {}) {
        // const db = fasulkeyDb()
    }
}
