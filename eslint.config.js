export default [
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      'prefer-const': 'warn',
      'no-constant-binary-expression': 'error',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'warn',
    },
  },
  // ignore jsx blocks inside of test.md files
  {
    ignores: ['**/test.md/*.jsx', 'node_modules/**/*'],
  },
];
