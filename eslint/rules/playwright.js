export default {
  /**
   * Require lowercase test names.
   *
   * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
   */
  'playwright/prefer-lowercase-title': [
    'warn',
    { ignoreTopLevelDescribe: true },
  ],
  /**
   * Suggest using `toBe()` for primitive literals.
   *
   * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-be.md
   */
  'playwright/prefer-to-be': 'warn',
  /**
   * Suggest using `toContain()`.
   *
   * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-contain.md
   */
  'playwright/prefer-to-contain': 'warn',
  /**
   * Require using `toHaveLength` over explicitly checking lengths.
   *
   * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-to-have-length.md
   */
  'playwright/prefer-to-have-length': 'warn',
  /**
   * Require test cases and hooks to be inside a `test.describe` block.
   *
   * 🚫 Not fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/require-top-level-describe.md
   */
  'playwright/require-top-level-describe': 'error',
};
