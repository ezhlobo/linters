import node from './eslint/configs/node.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...node,
  {
    files: ['eslint/rules/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
];
