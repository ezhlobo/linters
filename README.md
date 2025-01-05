# Datarockets Style Guide

This repository is the home of Datarockets' style guide, which includes configs
for popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript-1)

## Contributing

Please read our [contributing](./CONTRIBUTING.md) guide before creating a pull
request.

## Installation

All of our configs are contained in one package, `@datarockets/style-guide`. To
install:

```sh
npm i -D @datarockets/style-guide
```

Some of our configs require peer dependencies. Install them depending on which
configs you use:

```sh
# If you use @datarockets/style-guide/prettier
npm i -D prettier

# If you use @datarockets/style-guide/eslint
npm i -D eslint

# If you use Next.js and @datarockets/style-guide/eslint/next
npm i -D @next/eslint-plugin-next

# If you use @datarockets/style-guide/typescript
npm i -D typescript
```

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@datarockets/style-guide/prettier"
}
```

If you need to override the configuration (see:
https://prettier.io/docs/en/configuration#sharing-configurations):

```js
import datarocketsPrettierConfig from '@datarockets/style-guide/prettier';

export default {
  ...datarocketsPrettierConfig,
  semi: false,
};
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of these
configs, but they should always be first in the configs order:

- `@datarockets/style-guide/eslint/browser`
- `@datarockets/style-guide/eslint/node`

Note that you can scope configs, so that configs only target specific files.
For more information, see: [Scoped configuration with `files`](#scoped-configuration-with-files).

The following additional configs are available:

- `@datarockets/style-guide/eslint/jest`
- `@datarockets/style-guide/eslint/jest-react` (includes rules for `@testing-library/react`)
- `@datarockets/style-guide/eslint/next` (requires `@next/eslint-plugin-next` to be installed at the same version as `next`)
  - extends `@datarockets/style-guide/eslint/react`
- `@datarockets/style-guide/eslint/playwright`
- `@datarockets/style-guide/eslint/react`
- `@datarockets/style-guide/eslint/storybook`
- `@datarockets/style-guide/eslint/typescript` (requires `typescript` to be installed)

### Plugins

#### Base

- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

#### TypeScript

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-tsdoc](https://github.com/microsoft/tsdoc)

#### React

- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

#### Next

- [@next/eslint-plugin-next](https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-plugin)

#### Jest

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) (React)

#### Playwright

- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright)

#### Storybook

- [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook)

### Examples

#### Next.js

> Note: you might need to clear ESLint's cache for the first usage.

Here is a recommended approach of using ESLint configs in Next.js projects.

`eslint.config.js`:

```js
import path from 'node:path';

import browser from '@datarockets/style-guide/eslint/browser';
import jest from '@datarockets/style-guide/eslint/jest';
import jestReact from '@datarockets/style-guide/eslint/jest-react';
import next from '@datarockets/style-guide/eslint/next';
import node from '@datarockets/style-guide/eslint/node';
import playwright from '@datarockets/style-guide/eslint/playwright';
import storybook from '@datarockets/style-guide/eslint/storybook';
import ts from '@datarockets/style-guide/eslint/typescript';
import {
  applyConfigsToFiles,
  includeIgnoreFile,
} from '@datarockets/style-guide/eslint/utils';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      // Any directories/files which makes sense to ignore to improve ESLint
      // performance.
    ],
  },
  ...node,
  ...browser,
  ...ts,
  ...next,
  // Unit tests (Jest)
  ...applyConfigsToFiles(
    [
      'src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      'src/**/?(*.)+(spec|test).{js,jsx,ts,tsx}',
      'jest.setup.{js,ts}',
    ],
    [...jest, ...jestReact, { settings: { jest: { version: 20 } } }],
  ),
  // E2E tests (Playwright)
  ...applyConfigsToFiles(
    ['tests/**/?(*.)+(spec|test).{js,jsx,ts,tsx}'],
    playwright,
  ),
  // Storybook
  ...applyConfigsToFiles(['*.stories.{js,jsx,ts,tsx}'], storybook),
];
```

`next.config.js`:

```js
/** @type {NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      // By default, Next.js lints only `app`, `pages`, `components`, `lib`, `src`
      // directories. Here we overwrite it to lint all files in the project.
      '.',
    ],
  },
};
```

### Scoped configuration with `files`

ESLint configs can be scoped to include/exclude specific paths. This ensures
that rules don't "leak" into places where those rules don't apply.

```js
export default [
  // ...intial configuration
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowAny: true, allowBoolean: true, allowNumber: true },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
];
```

In case you need to apply multiple configs to certain files, you can use `applyConfigsToFiles` utility. That utility preserves the original configs `files` and also applies the patterns you specify:

```js
export default [
  // ...intial configuration
  ...applyConfigsToFiles(
    ['some-dir/**/*'],
    [
      ...externalConfig,
      // Here, the final `files` should match both 'some-dir/**/*' and '**/*.{ts,tsx}'.
      { files: ['**/*.{ts,tsx}'], rules: { 'some-rule': 'off' } },
    ],
  ),
];
```

### Configuring rules/settings

There are some rules/settings that you probably want to configure manually to
fit your project needs.

#### `jsx-a11y` custom components

It's common practice for React apps to have shared components like `Button`,
which wrap native elements. You can pass this information along to `jsx-a11y`
via the `components` setting.

For example,

```js
export default [
  // ...intial configuration
  {
    settings: {
      'jsx-a11y': {
        components: {
          Article: 'article',
          Button: 'button',
          Image: 'img',
          Input: 'input',
          Link: 'a',
          Video: 'video',
          // ...
        },
      },
    },
  },
];
```

#### `unicorn/filename-case`

By default, it's configured to ensure that all files are in `kebab-case`. If
your project already have a convention for file names, you can configure this
rule to fit the convention (see [Documentation](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md)):

```js
export default [
  {
    rules: {
      // Your project uses both `camelCase` and `PascalCase`
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  },
];
```

#### `simple-import-sort/imports` (import order)

We enforce a certain import order by default. For example:

```tsx
// Side effects
import './global.css';

// Node.js builtins prefixed with `node:`.
import path from 'node:path';

// External packages
import Image from 'next/image';

// 1. Absolute imports and other imports such as Vue-style `@/foo`.
// 2. Relative imports.
import { SomeComponent } from '@/components';
import { parent } from '../parent';
import { sibling } from './sibling';
```

You can configure it by modifying `simple-import-sort/imports` rule (see [Documentation](https://github.com/lydell/eslint-plugin-simple-import-sort)):

```js
export default [
  {
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Type imports.
            ['\\u0000$'],
            // Side effect imports.
            ['^\\u0000'],
            // Node.js builtins prefixed with `node:`.
            ['^node:'],
            // Packages.
            ['^@?\\w'],
            // 1. Absolute imports and other imports such as Vue-style `@/foo`.
            // 2. Relative imports.
            ['^', '^\\.'],
          ],
        },
      ],
    },
  },
];
```

### Debugging ESLint

Sometimes you need to debug ESLint to understand what actually happens and why
something doesn't work.

To output ESLint debug logs:

```sh
DEBUG=eslint* npx eslint .
# For Next.js projects
DEBUG=eslint* npx next lint
```

To show final ESLint config:

```sh
npx eslint --print-config <some-file>
```

## TypeScript

We provide a base config for TypeScript which contains some defaults we usually
use.

To use it, just extend it in your `tsconfig.json`:

```json
{
  "extends": "@datarockets/style-guide/typescript"
}
```

The base config isn't intended to be used as a complete one, so you might need
to add more settings in your `tsconfig.json`. For example:

```json
{
  "extends": "@datarockets/style-guide/typescript",
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".storybook/**/*"
  ],
  "exclude": ["node_modules"]
}
```

## Acknowledge

Inspired by https://github.com/vercel/style-guide.
