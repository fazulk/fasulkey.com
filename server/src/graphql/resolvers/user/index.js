// The User schema.
const User = app_require(`models/users`)

module.exports = {
    Query: {
        user: async (parent, { id }, context, info) => {
            return await User.findOne({ id })
        },
        user_name: async (parent, { name }, context, info) => {
            return await User.findOne({ name })
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
