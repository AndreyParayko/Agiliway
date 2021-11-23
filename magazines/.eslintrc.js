module.exports = {
  env: {
    es2021: true,
  },
  extends: 'airbnb',

  plugins: ['react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', 'unix'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'object-curly-spacing': 'off',
    'no-restricted-exports': 'off',
    'function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'default-param-last': 'off',
    'react/state-in-constructor': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
