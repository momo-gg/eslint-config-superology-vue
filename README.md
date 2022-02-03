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
npm install eslint prettier eslint-plugin-import --save-dev
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

## Suggestions?

Create a discussion on [GitHub](/discussions) or [learn how to make a contribution](https://github.com/firstcontributions/first-contributions).
