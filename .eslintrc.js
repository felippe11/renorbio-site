module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
    'eslint:recommended',
    // 'prettier',
    // 'prettier/vue',
    '@vue/airbnb',
  ],
  rules: {
    "indent": "off",
    "object-curly-spacing": "off",
    'quotes': [0,"single"],
    // 'prettier/prettier': [
    //   'error', {
    //     singleQuote: false
    //   }
    // ],
    "comma-dangle": 0,
    "object-curly-newline": 0,
    "no-underscore-dangle": 0,
    "eqeqeq": 0,
    "no-plusplus": 0,
    'arrow-parens': 0,
    'import/extensions': ['warn', 'always', { vue: 'never', js: 'never' }],
    'import/prefer-default-export': 0,
    'operator-linebreak': 0,
    'linebreak-style': 0,
    camelcase: 0,
    singleQuote: 0,
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'max-len': 1,
    semi: 1,
    'no-await-in-loop': 1,
    'no-restricted-syntax': 1,
    'guard-for-in': 1,
    'no-param-reassign': 1,
    'vue/no-mutating-props': 1,
    'no-useless-escape': 1,
    "no-self-assign": 0,
    "no-unused-vars": [
      "error", { "args": "none" }
    ],
    "radix": 0,
    "import/no-cycle": 0
  },
};
