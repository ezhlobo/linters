const { fixupConfigRules } = require('@eslint/compat');
const eslintrc = require('@eslint/eslintrc');

const nextRules = require('../rules/next');
const react = require('./react');

const compat = new eslintrc.FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config} */
module.exports = [
  ...react,
  ...fixupConfigRules(compat.extends('plugin:@next/next/core-web-vitals')),
  {
    rules: {
      ...nextRules,
    },
  },
];
