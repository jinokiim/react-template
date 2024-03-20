module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended' // eslint-config-prettier를 사용하여 prettier 규칙을 비활성화
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'max-len': 0,
    'no-alert': 0,
    'no-shadow': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'react/jsx-key': 2,
    'import/no-cycle': 0,
    'no-return-assign': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'react/button-has-type': 1,
    'class-methods-use-this': 0,
    'react/no-children-prop': 0,
    'react/jsx-boolean-value': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-default-props': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-shadow': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/naming-convention': 0,
    'react-hooks/exhaustive-deps': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'import/no-extraneous-dependencies': 0,
    'object-curly-spacing': [1, 'always'],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'prettier/prettier': [
      2,
      {
        semi: true,
        printWidth: 100,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ]
  }
};
