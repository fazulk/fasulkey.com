module.exports = {
  root: true,

  env: {
    node: true
  },

  plugins: ['json'],

  extends: ['plugin:vue/strongly-recommended', "@vue/prettier"],

  globals: {
    "gssId": "writeable",
    "Log": "readonly",
    "describe": "readonly",
    "it": "readonly",
    "expect": "readonly"
  },

  rules: {
    'multiline-ternary': ["warn", "always-multiline"],
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/order-in-components': 'error',
    'vue/attributes-order': 'error',
    'vue/this-in-template': 'error',
    'prettier/prettier': [
      `warn`,
      {
        singleQuote: true,
        tabWidth: 4,
        semi: false
      }
    ],
    'quotes': [`warn`, `backtick`],
    'semi': [`warn`, `never`]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

}
