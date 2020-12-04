export const resume = {
    Query: {
        resumeHistory: async (root, args, { db }) => {
            return await db.resumeCol.getHistory()
        },
        resumeBasicInfo: async (root, args, { db }) => {
            return await db.resumeCol.getBasicInfo()
        }
    }
    // TODO create option to modify resume
    // Mutation: {
    //     updateUserPerm: async (root, { userIds, permissions }, { db }) => {
    //         return await db.accountDetailsCol.updateUserPerms({
    //             userIds,
    //             permissions
    //         })
    //     }
    // }
}
