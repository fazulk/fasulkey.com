import Firestore from '@google-cloud/firestore'

export const fasulkeyDb = () => {
    return process.env.NODE_ENV === `development`
        ? new Firestore({
              projectId: `fasulkey`,
              keyFilename: `../fasulkey-fire-store.json`
          })
        : new Firestore()
}
