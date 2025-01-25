export default {
  /**
   * `eslint-disable` directive-comments disable ESLint rules in all lines
   * preceded by the comment. If you forget `eslint-enable` directive-comment,
   * you may overlook ESLint warnings unintentionally.
   *
   * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
   */
  '@eslint-community/eslint-comments/disable-enable-pair': [
    'error',
    { allowWholeFile: true },
  ],
  /**
   * This rule warns directive comments without description.
   *
   * 🚫 Not fixable - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
   */
  '@eslint-community/eslint-comments/require-description': 'error',
};
