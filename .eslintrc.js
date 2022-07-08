module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app/jest',
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
    'react/button-has-type': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent': ['error', 2, {'checkAttributes': true, 'indentLogicalExpressions': true}],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: { single: 1, multi: 1 } },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [0],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
      },
    ],
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-await-in-loop': ['error'],
    'no-param-reassign': 'error',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-sparse-arrays': 0,
    'curly': 'error',
  },
};
