export default {
  /**
   * Require curly braces for multiline blocks.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/curly
   */
  curly: 'warn',
  /**
   * Require function expressions to have a name.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/func-names
   */
  'func-names': ['error', 'as-needed'],
  /**
   * Require grouped accessor pairs in object literals and classes.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs': 'error',
  /**
   * Disallow use of the Array constructor.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-array-constructor
   */
  'no-array-constructor': 'error',
  /**
   * Disallow await inside of loops.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-await-in-loop
   */
  'no-await-in-loop': 'error',
  /**
   * Disallow use of bitwise operators.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-bitwise
   */
  'no-bitwise': 'error',
  /**
   * Disallow the use of console.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-console
   */
  'no-console': 'error',
  /**
   * Disallow expressions where the operation doesn't affect the value.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-constant-binary-expression
   */
  'no-constant-binary-expression': 'error',
  /**
   * Disallow returning value in constructor.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-constructor-return
   */
  'no-constructor-return': 'error',
  /**
   * Disallow `else` blocks after `return` statements in `if` statements.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-else-return
   */
  'no-else-return': 'warn',
  /**
   * Disallow `eval()`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-eval
   */
  'no-eval': 'error',
  /**
   * Disallow extending native objects.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-extend-native
   */
  'no-extend-native': 'error',
  /**
   * Disallow unnecessary function binding.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-bind
   */
  'no-extra-bind': 'error',
  /**
   * Disallow unnecessary labels.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-extra-label
   */
  'no-extra-label': 'error',
  /**
   * Disallow shorthand type conversions. Allow `!!` shorthand because it works
   * better than `Boolean` in TypeScript.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-implicit-coercion
   */
  'no-implicit-coercion': ['warn', { allow: ['!!'] }],
  /**
   * Disallow use of `eval()`-like methods.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-implied-eval
   */
  'no-implied-eval': 'error',
  /**
   * Disallow usage of `__iterator__` property.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-iterator
   */
  'no-iterator': 'error',
  /**
   * Disallow labels that share a name with a variable.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-label-var
   */
  'no-label-var': 'error',
  /**
   * Disallow use of labels for anything other than loops and switches.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-labels
   */
  'no-labels': ['error'],
  /**
   * Disallow unnecessary nested blocks.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-lone-blocks
   */
  'no-lone-blocks': 'error',
  /**
   * Disallow if as the only statement in an else block.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-lonely-if
   */
  'no-lonely-if': 'warn',
  /**
   * Disallow use of chained assignment expressions.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-multi-assign
   */
  'no-multi-assign': ['error'],
  /**
   * Disallow `new` for side effects.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-new
   */
  'no-new': 'error',
  /**
   * Disallow function constructors.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-func
   */
  'no-new-func': 'error',
  /**
   * Disallow primitive wrapper instances, such as `new String('foo')`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-new-wrappers
   */
  'no-new-wrappers': 'error',
  /**
   * Disallow use of octal escape sequences in string literals.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-octal-escape
   */
  'no-octal-escape': 'error',
  /**
   * Disallow returning values from Promise executor functions.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-promise-executor-return
   */
  'no-promise-executor-return': 'error',
  /**
   * Disallow usage of the deprecated `__proto__` property.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-proto
   */
  'no-proto': 'error',
  /**
   * Disallow assignment in `return` statement.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-return-assign
   */
  'no-return-assign': 'error',
  /**
   * Disallow use of `javascript:` urls.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-script-url
   */
  'no-script-url': 'error',
  /**
   * Disallow comparisons where both sides are exactly the same.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-self-compare
   */
  'no-self-compare': 'error',
  /**
   * Disallow comma operators.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-sequences
   */
  'no-sequences': 'error',
  /**
   * Disallow template literal placeholder syntax in regular strings, as
   * these are likely errors.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-template-curly-in-string
   */
  'no-template-curly-in-string': 'error',
  /**
   * Disallow initializing variables to `undefined`.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-undef-init
   */
  'no-undef-init': 'warn',
  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary': 'error',
  /**
   * Disallow loops with a body that allows only one iteration.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-unreachable-loop
   */
  'no-unreachable-loop': 'error',
  /**
   * Disallow unused variables.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-unused-vars
   */
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
  /**
   * Disallow unnecessary `.call()` and `.apply()`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-call
   */
  'no-useless-call': 'error',
  /**
   * Disallow useless computed property keys.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-computed-key
   */
  'no-useless-computed-key': 'warn',
  /**
   * Disallow unnecessary concatenation of strings.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/no-useless-concat
   */
  'no-useless-concat': 'error',
  /**
   * Disallow unnecessary constructors.
   *
   * 🚫 Not fixable - https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  'no-useless-constructor': 'error',
  /**
   * Disallow renaming import, export, and destructured assignments to the
   * same name.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-rename
   */
  'no-useless-rename': 'warn',
  /**
   * Disallow redundant return statements.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-useless-return
   */
  'no-useless-return': 'warn',
  /**
   * Require `let` or `const` instead of `var`.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/no-var
   */
  'no-var': 'error',
  /**
   * Require object literal shorthand syntax.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/object-shorthand
   */
  'object-shorthand': 'warn',
  /**
   * Require default to `const` instead of `let`.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-const
   */
  'prefer-const': 'warn',
  /**
   * Require using named capture groups in regular expressions.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group': 'error',
  /**
   * Disallow parseInt() in favor of binary, octal, and hexadecimal literals.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals': 'error',
  /**
   * Require use of an object spread over Object.assign.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-object-spread
   */
  'prefer-object-spread': 'warn',
  /**
   * Require using Error objects as Promise rejection reasons.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  /**
   * Disallow use of the RegExp constructor in favor of regular expression
   * literals.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-regex-literals
   */
  'prefer-regex-literals': 'error',
  /**
   * Require using rest parameters instead of `arguments`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-rest-params
   */
  'prefer-rest-params': 'error',
  /**
   * Require using spread syntax instead of `.apply()`.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/prefer-spread
   */
  'prefer-spread': 'error',
  /**
   * Require using template literals instead of string concatenation.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/prefer-template
   */
  'prefer-template': 'warn',
  /**
   * Require a `Symbol` description.
   *
   * 🚫 Not fixable - https://eslint.org/docs/rules/symbol-description
   */
  'symbol-description': 'error',
  /**
   * Disallow "Yoda" conditions.
   *
   * 🔧 Fixable - https://eslint.org/docs/rules/yoda
   */
  yoda: 'warn',
};
