import { minimatch } from 'minimatch';

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
export function applyConfigsToFiles(globPatterns, configs) {
  const minimatchOptions = { dot: true };

  return configs.map(config => ({
    ...config,
    files: [
      filePath =>
        globPatterns.some(pattern =>
          minimatch(filePath, pattern, minimatchOptions),
        ) &&
        (config.files?.some(pattern =>
          typeof pattern === 'function'
            ? pattern(filePath)
            : minimatch(filePath, pattern, minimatchOptions),
        ) ??
          true),
    ],
  }));
}
