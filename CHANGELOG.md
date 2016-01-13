# Versions

## v0.6.3 - (13/01/2016)

* Updated `babel-eslint` to v5-beta6.


## v0.6.2 - (12/01/2016)

* Updated rule:
    * No longer enforcing the use of `const` outside ES2015 environments for the
      `no-magic-numbers` global rule.


## v0.6.1 - (12/01/2016)

* Fixed configuration mistake for the `jsx-handler-names` React rule.


## v0.6.0 - (12/01/2016)

* New global rule:
    * Now disallowing the use of lexical declarations in `case`/`default`
      clauses. (`no-case-declarations`)

* New ES2015+ rule:
    * Now disallowing the use of `await` in loops. (`no-await-in-loop`)

* New style rule:
    * Now requiring the use of the second argument for `parseInt`, unless it's
      the value 10. (`radix`)

* New React rules:
    * Now ensuring that any component or prop methods used to handle events are
      correctly prefixed. (`jsx-handler-names`)
    * Now enforcing component indentation. (`jsx-indent`)
    * Now pointing out missing key properties. (`jsx-key`)
    * Now enforcing PascalCase for component names. (`jsx-pascal-case`)
    * Now disallowing the use of deprecated React methods. (`no-deprecated`)
    * Now disallowing the use of `isMounted`. (`no-is-mounted`)
    * Now disallowing the use of strings for refs. (`no-string-refs`)

* Updated rules:
    * Now allowing `setState` calls in functions inside `componentDidUpdate`,
      for the `no-did-update-set-state` React rule.
    * Added the following exceptions to the `id-length` rule:
        * `fs`
        * `i`
        * `j`
        * `k`
        * `log`

* New dependency:
    * `eslint-plugin-flow-vars`.

* Updated dependency:
    * `@auex/build-module` to v0.2.


## v0.5.3 - (18/12/2015)

* Updated `eslint-myrules-manager` to v0.5 to fix crash pertaining to recent
  ESLint internal modification.


## v0.5.2 - (06/11/2015)

* Added the following exceptions to the `no-underscore-dangle` rule:
    * `__DEV__`
    * `__PRERENDER__`
    * `__PROD__`
    * `__STAGE__`
    * `__TEST_ENV__`
    * `_id`

* Added the following exceptions to the `id-length` rule:
    * `key`
    * `src`
    * `url`

* Added an exception for `self` in the `no-shadow` rule.
* Relaxed the format requirement for descriptions in the `valid-jsdoc` rule.
* Added an exception for the `?` operator in the `operator-linebreak` style
  rule. It now has to be at the end of a multi-line statement like all other
  operators except for `:`. This is how it should already have been.


## v0.5.1 - (05/11/2015)

* Properly removed all leftovers from the removed
  `eslint-plugin-shadow-exception` ESLint plugin.


## v0.5.0 - (03/11/2015)

* New ES2015 rules:
    * Now disallowing arrow functions where a condition is expected.
      (`no-arrow-condition`)
    * Now enforcing proper arrow body style depending on body content.
      (`arrow-body-style`)

* Updated rules:
    * Now only allowing 1 empty line to end a file when enforcing the
      `no-multiple-empty-lines` style rule.

## v0.4.0 - (29/10/2015)

* New global rules:
    * Now disallowing the use of magic numbers. (`no-magic-numbers`)
    * Now disallowing the assignment of function expressions, except in the case
      of arrow functions. (`func-style`)
    * Now disallowing the use of undeclared variables, except if they're known
      globals. (`no-undef`)
    * Now disallowing dangling underscores in identifiers with the exception of
      `_id`. (`no-underscore-dangle`)

* New style rules:
    * Now disallowing spaces inside of single line blocks. (`block-spacing`)
    * Now disallowing negated conditions in lone if statements.
      (`no-negated-condition`)
    * Now requiring a space before all keywords. (`space-before-keywords`)
    * Now requiring a space after all keywords. (`space-after-keywords`)

* New ES2015 rules:
    * Now disallowing duplicate names in class members.
      (`no-dupe-class-members`)
    * Now disallowing unnecessary concatenation of literals or template
      literals. (`no-useless-concat`)
    * Now disallowing empty destructuring patterns. (`no-empty-pattern`)
    * Now suggesting to use arrow functions as callbacks.
      (`prefer-arrow-callback`)
    * Now suggesting to use template literals instead of strings concatenation.
      (`prefer-template `)

* New React rules:
    * Now disallowing the direct mutation of `this.state`.
      (`no-direct-mutation-state`)
    * Now suggesting components to be ES2015 classes. (`prefer-es6-class`)
    * Now enforcing the closing bracket location for JSX multiline elements.
      (`jsx-closing-bracket-location`)
    * Now validating a specific indentation style for props.
      (`jsx-indent-props`)

* Updated rules:
    * Now ignoring object properties when enforcing the `id-length` global rule.
    * Now allowing the following identifiers when enforcing the `id-length`
      global rule:
          * `_`
          * `__`
          * `db`
          * `lot`

    * Now allowing short-circuiting and ternary expressions in the
      `no-unused-expressions` global rule.
    * Now allowing comments at the start of arrays, array-likes, objects and
      object-likes in the `lines-around-comment` style rule. (`allowArrayStart`
      and `allowObjectStart`)
    * Now expecting properties beginning with "on" to be last in a component's
      `propTypes`. (`callbacksLast`)

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
