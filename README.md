# eslint-config-superology-vue

Shared ESLint config for Vue based projects at Superology.

![@superology/eslint-config-vue](https://svgshare.com/i/dvq.svg "ESLint Vue config by Superology")

ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

- [Getting Started](https://eslint.org/docs/user-guide/getting-started)
- [Configuring](https://eslint.org/docs/user-guide/configuring)
- [Rules](https://eslint.org/docs/rules/)
- [Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)

## Usage

### Install the configuration

```bash
npm install eslint-config-superology-vue --save-dev
```

Also make sure you have peer dependencies installed:

```bash
npm install eslint prettier jest eslint-plugin-import --save-dev
```

### Add to ESLint configuration

```json
{
  "extends": "eslint-config-superology-vue"
}
```

_Using `.eslintrc` file_

or

```js
module.exports = {
  extends: "eslint-config-superology-vue",
};
```

_if using `.eslintrc.js` file_

### Handling browser compatibility

It's recommended to update your `package.json` with browsers you intend to support using `browserslist`. The defaults for Superology would be:

```json
{
    "browserslist": [
        "last 2 versions",
        "not dead",
        "not ie >= 0",
        "not op_mini all",
        "not op_mob >= 0"
  ]
}
```

You can then check the supported browsers by running `npx browserslist`.

If you still receive compatibility warnings for browsers that you are not supporting, it's possible that some npm package is superseding your eslint config with it's own config. To make sure that your browserslist is respected, override the targets in your `eslintrc` config with:

```json
{
    "settings": {
        "targets": null
    }
}
```

## Suggestions?

Create a discussion on [GitHub](/discussions) or [learn how to make a contribution](https://github.com/firstcontributions/first-contributions).
