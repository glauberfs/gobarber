module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    // eslint-disable-next-line prettier/prettier
    'camelcase': 'off',
    // eslint-disable-next-line prettier/prettier
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
  },
};
