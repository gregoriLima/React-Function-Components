module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'object-curly-spacing': 'off', // removing line break style to avoid ; error in windows
    'no-tabs': 0, // not verify identation
    'react/jsx-indent': 'off', // not verify identation
    'react/jsx-indent-props': 'off', // not verify identation
    'linebreak-style': 'off', // removing line break style to avoid ; error in windows
    indent: ['warn', 2],
    'max-len': ['warn', 280],
    'no-unused-vars': 'warn',
  },
};
