import * as eslintrc from '@eslint/eslintrc';
import js from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import stylistic from '@stylistic/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';

import commentsRules from '../rules/comments.js';
import importRules from '../rules/import.js';
import standardRules from '../rules/standard.js';
import stylisticRules from '../rules/stylistic.js';
import unicornRules from '../rules/unicorn.js';

/**
 * The base ESLint config which is shared among all environments.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  comments.recommended,
  prettierConfig,
  {
    languageOptions: {
      ...eslintrc.Legacy.environments.get('es2024'),
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      unicorn,
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        typescript: { alwaysTryTypes: true },
      },
    },
    rules: {
      ...standardRules,
      ...stylisticRules,
      ...commentsRules,
      ...importRules,
      ...unicornRules,
    },
  },
];
