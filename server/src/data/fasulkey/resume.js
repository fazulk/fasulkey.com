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
            .map(e => {
                const [month, year] = (`` + e.endDate).split(`-`)
                e.sortDate = e.endDate ? new Date(year, month - 1) : new Date()
                return e
            })
            .sort((a, b) => b.sortDate - a.sortDate)
    }

    async function setResume({ type } = {}) {
        const db = fasulkeyDb()

        return await db
            .collection(`resume`)
            .doc(`general`)
            .set({
                type: `non-linear`,
                location: `California`,
                email: `jfasulkey@gmail.com`,
                url: `https://jeffs.geocities.page`,
                github: `https://github.com/fazulk`,
                name: `Jeff Fasulkey`,
                objective: `To apply my dynamic skill-set in a workplace that thrives on providing the highest quality products and service while also generating an excellent user experience.`,
                languages: [
                    `Javascript, ES6+, Node.js, MongoDB, Oracle, SQL, Yarn, NPM`,
                    `Google Cloud Project, Cloud Functions, SSR, Docker, Kubernetes`,
                    `Effeciant, scalable application architecture & design patterns`,
                    `Vue.js, HTML5,\tCSS, SASS, Webpack, Babel, JSON, Application Security`,
                    `Excel, Photoshop, Illustrator, Dreamweaver, Flash`,
                    `OSX, Windows 7, 10`
                ]
            })
    }
}
