module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    'react/no-did-update-set-state': 0,
  },
  globals: {
    jest: true,
    test: true,
    expect: true,
    afterEach: true,
  },
}
