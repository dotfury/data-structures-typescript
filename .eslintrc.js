module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'react-app',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  rules: {
    // Specific React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Overrides indent 4 chars rule
    '@typescript-eslint/indent': [2, 2],
    // Allow `const var = require()
    '@typescript-eslint/no-var-requires': 'off',
    'member-access': 'off',
    'interface-name': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
