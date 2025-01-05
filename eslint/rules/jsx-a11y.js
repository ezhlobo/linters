/**
 * Rules enabled by `jsx-a11y/recommended` but we don't want them.
 */
const disabledRules = {
  // This rule has been deprecated, but not yet removed.
  'jsx-a11y/no-onchange': 'off',
};

export default {
  ...disabledRules,
};
