const User = require(`../../models/users`)

exports.resolver = {
    Query: {
        // user: async (parent, { id }, context, info) => {
        //     return await User.findOne({ id })
        // },
        userName: async (parent, { name, id }, context, info) => {
            if (name) return await User.findOne({ name })
            if (id) return await User.findOne({ id })
        },
        users: async () => {
            return await User.find({})
        }
    },
    Mutation: {
        addUser: async (root, { id, name, email }) => {
            const newUser = new User({ id, name, email })
            return await newUser.save()
        },
        editUser: async (root, { id, name, email }) => {
            return await User.findOneAndUpdate(
                { id },
                { $set: { name, email } }
            )
        },
        deleteUser: async (root, args) => {
            return await User.findOneAndRemove(args)
        }
    }
}
