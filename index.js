module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'plugin:optimize-regex/recommended'
  ],
  plugins: ['@babel'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
    serviceworker: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
      }
    },
    'import/extensions': ['.js', '.jsx', '.tsx', '.ts']
  },
  rules: {
    /* turn off or enable and configure rules */
    'no-redeclare': 'off',
    'no-delete-var': 'off',
    'no-constructor-return': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: false
    }],
    'require-atomic-updates': 'error'
    /* and so on till the end... */
  },
  overrides: [
    {
      files: '**/?(*.)+(spec|test).[jt]s?(x)',
      extends: [
        'plugin:jest-dom/recommended',
        'plugin:jest/all'
      ],
      rules: {
        /* turn off or enable and configure rules */
        'jest/no-hooks': 'off',
        'jest/prefer-expect-assertions': ['error', { onlyFunctionsWithAsyncKeyword: true }],
        'max-lines': 'off'
        /* and so on till the end... */
      }
    }
  ]
};
