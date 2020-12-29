import { applyConfig } from './src/config.js'

export const config = {
    NODE_ENV: `development`,
    MONGO_URI: `mongodb://localhost:27017/fasulkey`
}

applyConfig(config)
