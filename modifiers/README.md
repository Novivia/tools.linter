# Modifiers

Sometimes you want some rules for a project and not for another.
Without requiring the need for multiple version of this project.

Modifiers are specific to your rules and can be tedeious to implement. I suggest
to use them mostly for add/remove rules and avoid multiple modifiers that can
affect the same rule.

## Available modifiers

```js
{
  "novivia-linter": {
    "modifiers": {
      "react": Boolean, // Enable/Disable react plugin. Default: true,
      "es2015": Boolean, // Enable/Disable rules for ES2015. Default: true,
      "no-code-style": Boolean // Do not add rules concerning code style. Default: false
    }
  }
}
```
