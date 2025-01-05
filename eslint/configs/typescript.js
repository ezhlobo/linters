import tsdoc from 'eslint-plugin-tsdoc';
import * as tseslint from 'typescript-eslint';

import { TYPESCRIPT_FILES } from '../constants.js';
import tsdocRules from '../rules/tsdoc.js';
import typescriptRules from '../rules/typescript.js';
import { applyConfigsToFiles } from '../utils.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      tsdoc,
    },
    rules: {
      ...typescriptRules,
    },
  },
  ...applyConfigsToFiles(TYPESCRIPT_FILES, [
    {
      rules: {
        ...tsdocRules,
      },
    },
  ]),
];
