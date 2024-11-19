//.eslintrc.js

module.exports = {
  root: true,
    env: {
        browser: true,
        node: true,
        "vue/setup-compiler-macros": true
    },
  plugins: ['prettier'],
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier', 'prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                semi: false,
            },
        ],
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
    },
}