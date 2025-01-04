const path = require('node:path');
const { minimatch } = require('minimatch');

/**
 * Maps through `configs` and applies them to the provided `globPatterns`.
 * It extends the original `files` from `configs` so final `files` should match
 * both `globPatterns` and `files` from a config.
 *
 * @param {string[]} globPatterns
 * @param {import('eslint').Linter.Config[]} configs
 *
 * @example
 * ```js
 * applyConfigsToFiles(['*.{ts,tsx}'], tseslint.configs.recommended);
 * ```
 */
function applyConfigsToFiles(globPatterns, configs) {
  globPatterns = globPatterns.map(pattern => path.join(__dirname, pattern));

  return configs.map(config => ({
    ...config,
    files: [
      filePath =>
        globPatterns.some(pattern => minimatch(filePath, pattern)) &&
        (config.files?.some(pattern =>
          typeof pattern === 'function'
            ? pattern(filePath)
            : minimatch(filePath, pattern),
        ) ??
          true),
    ],
  }));
}

module.exports = {
  applyConfigsToFiles,
};
