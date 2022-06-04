module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
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
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-await-in-loop': ['error'],
    'no-param-reassign': 'error',
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-sparse-arrays': 0,
    curly: 'error',
  },
};
