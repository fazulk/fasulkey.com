import { fasulkeyDb } from './_connections/mongo.js'
// import { fasulkeyDb } from './_connections/firestore.js'

import buildResume from './fasulkey/resume.js'

export const resumeCol = buildResume({ fasulkeyDb })
