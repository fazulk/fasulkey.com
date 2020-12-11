export const resumeRes = {
    Query: {
        resume: async (root, args, { db }) =>
            (await db.resumeCol.getResume({ type: `non-linear` }))[0]
    },
    Resume: {
        education: (parent, args, { db }) =>
            db.resumeCol.getResume({ type: `education` }),
        experience: (parent, args, { db }) =>
            db.resumeCol.getResume({ type: `experience` }),
        affiliations: (parent, args, { db }) =>
            db.resumeCol.getResume({ type: `affiliations` })
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
