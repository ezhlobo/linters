// https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
const baseImportOrder = [
  // Side effect imports.
  ['^\\u0000'],
  // Node.js builtins prefixed with `node:`.
  ['^node:'],
  // Packages.
  ['^@?\\w'],
  // 1. Special aliases (e.g. `@/`, `~/`).
  // 2. Relative imports.
  ['^[@~^$#!]/', '^\\.'],
];

/** Type imports order */
const typeImportOrder = baseImportOrder.flatMap(group =>
  group.map(item => `${item}.+\\u0000$`),
);

const importOrder = [typeImportOrder, ...baseImportOrder];

export default {
  /**
   * Enforce that named type-only specifiers only ever written as part of a
   * top-level, type-only import; and never with an inline marker.
   *
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
  /**
   * Disallow non-import statements appearing before import statements.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
   */
  'import/first': 'error',
  /**
   * Require a newline after the last import/require.
   *
   * 🔧 Fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
   */
  'import/newline-after-import': 'warn',
  /**
   * Disallow import of modules using absolute paths.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
   */
  'import/no-absolute-path': 'error',
  /**
   * Disallow cyclical dependencies between modules.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
   */
  'import/no-cycle': process.env.CI ? 'error' : 'off',
  /**
   * Disallow the use of extraneous packages.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
  /**
   * Disallow mutable exports.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports': 'error',
  /**
   * Disallow importing packages through relative paths.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
   */
  'import/no-relative-packages': 'warn',
  /**
   * Disallow a module from importing itself.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
   */
  'import/no-self-import': 'error',
  /**
   * Ensures that there are no useless path segments.
   *
   * 🚫 Not fixable - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
  /**
   * Enforce a module import/export order convention.
   *
   * 🔧 Fixable - https://github.com/lydell/eslint-plugin-simple-import-sort
   */
  'import/order': 'off',
  'simple-import-sort/exports': 'error',
  'simple-import-sort/imports': ['error', { groups: importOrder }],
};
