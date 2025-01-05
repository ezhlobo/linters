import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import { TYPESCRIPT_FILES } from '../constants.js';
import jsxA11yRules from '../rules/jsx-a11y.js';
import reactRules from '../rules/react.js';
import { applyConfigsToFiles } from '../utils.js';

/** @type {import('eslint').Linter.Config} */
export default [
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
