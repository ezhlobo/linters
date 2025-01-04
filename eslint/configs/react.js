const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');

const { applyConfigsToFiles } = require('../utils');
const { TYPESCRIPT_FILES } = require('../constants');
const reactRules = require('../rules/react');
const jsxA11yRules = require('../rules/jsx-a11y');

/** @type {import('eslint').Linter.Config} */
module.exports = [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  importPlugin.flatConfigs.react,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRules,
      ...jsxA11yRules,
    },
  },
  ...applyConfigsToFiles(TYPESCRIPT_FILES, [
    {
      rules: {
        // TODO: use https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
        'react/jsx-no-leaked-render': 'off',
      },
    },
  ]),
];
