export const config = {
    ...process.env,
    NODE_ENV: `production`,
    MONGO_URI: `mongodb+srv://keyb0ard:${process.env.MONGO_PW}@topazcluster.p7xiq.mongodb.net/fasulkey?retryWrites=true&w=majority`
}

export const applyConfig = options => {
    return Object.freeze(Object.assign(config, options))
}
