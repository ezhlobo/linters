/**
 * Rules enabled by `react/recommended` but we don't want them.
 */
const disabledRules = {
  // Modern browsers don't need this.
  'react/jsx-no-target-blank': 'off',
  // We recommend using TypeScript over `prop-types`, as `prop-types` can add
  // to a project's build size.
  'react/prop-types': 'off',
  // Disable requiring React to be imported, as this is no longer required.
  'react/react-in-jsx-scope': 'off',
};

export default {
  ...disabledRules,
  /**
   * Require consistent function type for function components.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
   */
  'react/function-component-definition': 'warn',
  /**
   * Require destructuring and symmetric naming of `useState` hook value and setter variables.
   *
   * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
   */
  'react/hook-use-state': 'warn',
  /**
   * Require consistent boolean attributes notation in JSX.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
   */
  'react/jsx-boolean-value': 'warn',
  /**
   * Disallow unnecessary curly braces in JSX props and children.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
   */
  'react/jsx-curly-brace-presence': 'warn',
  /**
   * Require using shorthand form for React fragments, unless required.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   */
  'react/jsx-fragments': 'warn',
  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders.
   *
   * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
   */
  'react/jsx-no-constructed-context-values': 'error',
  /**
   * Prevent problematic leaked values from being rendered.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
   */
  'react/jsx-no-leaked-render': 'warn',
  /**
   * Disallow empty React fragments.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
   */
  'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
  /**
   * Require the use of PascalCase for user-defined JSX components.
   *
   * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
   */
  'react/jsx-pascal-case': 'warn',
  /**
   * Require props to be sorted alphabetically.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
   */
  'react/jsx-sort-props': ['warn', { reservedFirst: true }],
  /**
   * Disallow creating unstable components inside components.
   *
   * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
   */
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  /**
   * Disallow closing tags for components without children.
   *
   * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
   */
  'react/self-closing-comp': 'warn',
};
