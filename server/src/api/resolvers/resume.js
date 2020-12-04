export const resume = {
    Query: {
        resumeHistory: async (root, { resumeType }, { db }) => {
            return await db.resumeCol.getHistory({
                resumeType
            })
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
