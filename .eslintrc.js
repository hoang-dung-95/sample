module.exports = {
  root: true,
  extends: [
    '@react-native/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-native', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Không cần với React 17+
    'react-native/no-inline-styles': 'off', // Tuỳ theo codebase bạn
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
