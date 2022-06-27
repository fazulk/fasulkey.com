import { fasulkeyDb } from './_connections/mongo'

import { buildResume } from './fasulkey/resume'

export const resumeCol = buildResume({ fasulkeyDb })
