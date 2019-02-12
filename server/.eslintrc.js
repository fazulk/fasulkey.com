module.exports = {
    root: true,
    env: {
        es6: true,
        node: true
    },
    extends: ['prettier'],
    plugins: ['prettier'],
    "parser": "babel-eslint",
    parserOptions: {
        ecmaVersion: 2017
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                tabWidth: 4,
                semi: false
            }
        ],
        quotes: [`warn`, `backtick`],
        semi: ['warn', 'never'],
        'no-implicit-globals': ['error'],
        'multiline-ternary': ["warn", "always-multiline"]
    }
}

// , "plugin:node/recommended",
