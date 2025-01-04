const node = require('./eslint/configs/node');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...node,
  {
    files: ['eslint/rules/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
];
