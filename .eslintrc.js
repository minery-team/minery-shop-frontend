const prettierConfig = require('./.prettierrc.js');

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'react',
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-console': ['warn', { allow: ['error'] }],
    '@typescript-eslint/no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },
};
