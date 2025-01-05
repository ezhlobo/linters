/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // Changes that affect the build system or external dependencies
        'build',
        // Other changes that don't modify src or test files
        'chore',
        // Changes to our CI configuration files and scripts
        'ci',
        // Documentation only changes (e.g. README)
        'docs',
        // A new feature
        'feat',
        // A bug fix
        'fix',
        // A code change that improves performance
        'perf',
        // A code change that neither fixes a bug nor adds a feature
        'refactor',
        // Reverts a previous commit
        'revert',
        // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        'style',
        // Adding missing tests or correcting existing tests
        'test',
        // Used for automated releases-only
        'release',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        // Dependency-related changes
        'deps',
        // ESLint-related changes
        'eslint',
        // Prettier-related changes
        'prettier',
        // TypeScript-related changes
        'typescript',
      ],
    ],
  },
};
