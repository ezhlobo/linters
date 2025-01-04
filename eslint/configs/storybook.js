const storybook = require('eslint-plugin-storybook');

/** @type {import('eslint').Linter.Config} */
module.exports = [...storybook.configs['flat/recommended']];
