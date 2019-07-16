module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: ["prettier"],

    rules: {
        'multiline-ternary': ["warn", "always-multiline"],
        'no-console': 'off',
        'no-debugger': 'off',      
        'quotes': [`warn`, `backtick`],
        'semi': [`warn`, `never`],
                'prettier/prettier': [
                    `warn`,
                    {
                        singleQuote: true,
                        tabWidth: 4,
                        semi: false
                    }
                ],
    },

    "plugins": [
        "prettier"
    ],

    parserOptions: {  
        "ecmaVersion": 2017,
        "sourceType": "module"
    },

}
