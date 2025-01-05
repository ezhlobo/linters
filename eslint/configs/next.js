import { fixupConfigRules } from '@eslint/compat';
import * as eslintrc from '@eslint/eslintrc';

import nextRules from '../rules/next.js';
import react from './react.js';

const compat = new eslintrc.FlatCompat();

/** @type {import('eslint').Linter.Config} */
export default [
  ...react,
  ...fixupConfigRules(compat.extends('plugin:@next/next/core-web-vitals')),
  {
    rules: {
      ...nextRules,
    },
  },
];
