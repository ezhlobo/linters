export default {
  /**
   * This rule requires or disallows blank lines between the given 2 kinds of
   * statements. Properly blank lines help developers to understand the code.
   *
   * 🔧 Fixable - https://eslint.style/rules/js/padding-line-between-statements
   */
  '@stylistic/padding-line-between-statements': [
    'warn',
    // Blank line before `return`
    { blankLine: 'always', next: 'return', prev: '*' },
    // Blank line after all directives (e.g. `use strict`)
    { blankLine: 'always', next: '*', prev: 'directive' },
    { blankLine: 'any', next: 'directive', prev: 'directive' },
  ],
};
