const testingLibrary = require('eslint-plugin-testing-library');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [...testingLibrary.configs['flat/react']];
