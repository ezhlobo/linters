const js = require('@eslint/js');
const comments = require('@eslint-community/eslint-plugin-eslint-comments/configs');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const eslintrc = require('@eslint/eslintrc');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const stylistic = require('@stylistic/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

const commentsRules = require('../rules/comments');
const importRules = require('../rules/import');
const standardRules = require('../rules/standard');
const stylisticRules = require('../rules/stylistic');
const unicornRules = require('../rules/unicorn');

/**
 * The base ESLint config which is shared among all environments.
 *
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
  {
    languageOptions: {
      ...eslintrc.Legacy.environments.get('es2024'),
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
  },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  comments.recommended,
  prettierRecommended,
  {
    rules: {
      ...standardRules,
      ...stylisticRules,
      ...commentsRules,
      ...importRules,
      ...unicornRules,
    },
  },
];
