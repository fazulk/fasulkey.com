const prettierConfig = require(`./.prettierrc.js`)

module.exports = {
    root: true,

    parserOptions: {
        sourceType: `script`
    },

    env: {
        node: true,
        mongo: true
    },

    plugins: [`prettier`],

    extends: [
        `standard`,
        `prettier`,
        `prettier/standard`
    ],

    rules: {
        'prettier/prettier': [`warn`, prettierConfig],
        'multiline-ternary': [`warn`, `always-multiline`],
        'no-console': `off`,
        'no-debugger': `off`,
        quotes: [`warn`, `backtick`]
    },
    overrides: [
        {
            files: [`server/**/*`],
            parserOptions: {
                parser: `babel-eslint`,
                sourceType: `module`,
                ecmaVersion: 2020
            }
        },
        {
            files: [`ui/**/*`],
            env: {
                browser: true,
                worker: true
            },

            parserOptions: {
                parser: `babel-eslint`,
                sourceType: `module`,
                ecmaVersion: 2020
            },

            extends: [
                `plugin:vue/recommended`,
                `standard`,
                `prettier`,
                `prettier/standard`,
                `prettier/vue`
            ],
            rules: {
                'prettier/prettier': [`warn`, prettierConfig],
                'multiline-ternary': [`warn`, `always-multiline`],
                'no-console': `off`,
                'no-debugger': `off`,
                quotes: [`warn`, `backtick`],
                'vue/array-bracket-spacing': `error`,
                'vue/arrow-spacing': `error`,
                'vue/block-spacing': `error`,
                'vue/brace-style': `error`,
                'vue/camelcase': `error`,
                'vue/dot-location': [`error`, `property`],
                'vue/eqeqeq': `error`,
                'vue/key-spacing': `error`,
                'vue/keyword-spacing': `error`,
                'vue/no-boolean-default': [`error`, `default-false`],
                'vue/no-deprecated-scope-attribute': `error`,
                'vue/no-empty-pattern': `error`,
                'vue/object-curly-spacing': [`error`, `always`],
                'vue/space-infix-ops': `error`,
                'vue/space-unary-ops': `error`,
                'vue/v-on-function-call': `error`,
                'vue/component-name-in-template-casing': [
                    `error`,
                    `kebab-case`,
                    { ignores: [`/^custom-/`], registeredComponentsOnly: false }
                ],

                'vue/v-slot-style': [
                    `error`,
                    {
                        atComponent: `v-slot`,
                        default: `v-slot`,
                        named: `longform`
                    }
                ],
                'vue/valid-v-slot': `error`
            }
        },
        {
            files: [`**/*.spec.js`, `**/*.unit.js`],
            plugins: [`jest`],
            extends: [`plugin:jest/recommended`],
            env: {
                jest: true
            },
            globals: {
                mount: false,
                shallowMount: false,
                shallowMountView: false,
                createComponentMocks: false,
                createModuleStore: false
            }
        },
        {
            files: [`**/*.test.js`, `**/*.e2e.js`],
            plugins: [`cypress`],
            env: {
                'cypress/globals': true
            }
        }
    ]
}
