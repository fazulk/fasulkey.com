import Firestore from '@google-cloud/firestore'
import { config } from '../../config.js'
export const fasulkeyDb = () => {
    return config.NODE_ENV === `development`
        ? new Firestore({
              projectId: `fasulkey`,
              keyFilename: `../fasulkey-fire-store.json`
          })
        : new Firestore()
}
