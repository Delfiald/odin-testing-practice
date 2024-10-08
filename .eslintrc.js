module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
