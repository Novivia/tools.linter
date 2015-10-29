# Versions

## v0.4.0 - ()

* New style rule:
    * Now disallowing spaces inside of single line blocks. (`block-spacing`)

* New ES2015 rules:
    * Now disallowing duplicate names in class members.
      (`no-dupe-class-members`)
    * Now disallowing unnecessary concatenation of literals or template
      literals. (`no-useless-concat`)
    * Now suggesting to use arrow functions as callbacks.
      (`prefer-arrow-callback`)
    * Now suggesting to use template literals instead of strings concatenation.
      (`prefer-template `)

* New React rules:
    * Now enforcing the closing bracket location for JSX multiline elements.
      (`jsx-closing-bracket-location`)
    * Now validating a specific indentation style for props.
      (`jsx-indent-props`)

* Updated dependency:
    * `eslint-myrules-manager` to v0.4 and adjusted configuration accordingly.


## v0.3.0 - (19/08/2015)

* Modified rules:
    * Now ignoring URLs in the `max-len` rule.
    * Now enforcing indentation for switch-cases and variable declarations in
      the `indent` rule.

* New rules:
    * Now disallowing unnecessary `.call()` and `.apply()`. (`no-useless-call`)
    * Now enforcing the use of `return` when executing a callback, unless it's
      the last operation. (`callback-return`)

* New ES2015 rules:
    * Now enforcing arrow function spacing. (`arrow-spacing`)
    * Now enforcing trailing commas on multiline arrays and objects.
      (`comma-dangle`)
    * Now disallowing the use of multiple spaces in all cases.
      (`no-multi-spaces`)
    * Now disallowing mixing regular variable and require declarations.
      (`no-mixed-requires`)
    * Now disallowing modifying variables of class declarations
      (`no-class-assign`)
    * Now disallowing modifying variables that are declared using `const`
      (`no-const-assign`)
    * Now disallowing the `this` keyword outside of classes or class-like
      objects (`no-invalid-this`)
    * Now disallowing reassignment of function parameters. (`no-param-reassign`)
    * Now suggesting to use Reflect methods where applicable. (`prefer-reflect`)
    * Now suggesting to use the spread operator instead of `.apply()`.
      (`prefer-spread`)
    * Now disallowing generator functions that do not have `yield`.
      (`require-yield`)
    * Now preventing the use of any `strict` directive. (`strict`)

* Under the hood: Updated ESLint to 1.1, eslint-plugin-react to 3.2 and
  eslint-plugin-babel to 2.0. As a result, added rules that were on by default
  prior to ESLint 1.0.


## v0.2.0 - (31/07/2015)

* Package now scoped under @auex and published in private npm.
* Added change log (This!)
