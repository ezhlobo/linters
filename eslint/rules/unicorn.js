/**
 * Rules enabled by `unicorn/recommended` but we don't want them.
 */
const disabledRules = {
  /**
   * Use destructured variables over properties.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring': 'off',
  /**
   * Disallow negated conditions.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition': 'off',
  /**
   * Disallow the use of the `null` literal.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
   */
  'unicorn/no-null': 'off',
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module': 'off',
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or
   * non-existence.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has': 'off',
  /**
   * Prevent abbreviations.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
   */
  'unicorn/prevent-abbreviations': 'off',
};

export default {
  ...disabledRules,
  /**
   * Disallow useless `undefined`.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
  /**
   * Prefer `Number` static properties over global ones.
   *
   * 🔧 Fixable - https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties': ['error', { checkInfinity: false }],
};
