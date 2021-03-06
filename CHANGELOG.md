# Versions

## v1.10.1 - (15/12/2016)

* Updated ES2015+ rules:
    * No longer necessary to provide typings for arrow functions.
      (`flowtype/require-parameter-type` and `flowtype/require-return-type`)
    * Relaxed required naming pattern for Flow type aliases further. Any
      character can be a capital letter now. (`flowtype/type-id-match`)

* Updated global rules:
    * No longer enforcing placing object properties on separate lines if the
      whole object fits on a single line. (`object-property-newline`)
    * Relaxed required elements for JSDoc validation. (`valid-jsdoc`)


## v1.10.0 - (15/12/2016)

* Updated ES2015+ rule:
    * Relaxed required naming pattern for Flow type aliases. The trailing `Type`
      is now optional. (`flowtype/type-id-match`)

* New React rule:
    * Now enforcing a defaultProps definition for every prop that is not a
      required prop. (`react/require-default-props`)

* Updated `@novivia/babel` dependency to v0.1.


## v1.9.0 - (29/11/2016)

* Now ignoring the "coverage" directory by default.

* New ES2015+ rules:
    * Now disallowing `async` functions which have no `await` expression.
      (`require-await`)
    * Added new Flow-related rule, applied only to files with the `@flow`
      annotation, so it doesn't become intrusive:
        * Now disallowing the use of primitive constructors as types, such as
          `Boolean`, `Number` and `String`.
          (`flowtype/no-primitive-constructor-types`)

* New style rule:
    * Now enforcing capitalization of the first letter of a comment.
      (`capitalized-comments`)

* Updated `@novivia/babel` dependency to v0.0.5.


## v1.8.1 - (18/11/2016)

* Updated `eslint-plugin-babel` dependency to v4.


## v1.8.0 - (14/11/2016)

* New ES2015+ rule:
    * Now disallowing unnecessary `return await`. (`no-return-await`)

* New React rule:
    * Now validating whitespace in and around the JSX opening and closing
      brackets. (`react/jsx-tag-spacing`)

* Updated `eslint-plugin-jsx-a11y` dependency to v3.


## v1.7.0 - (04/11/2016)

* Now recognizing Jasmine global variables.

* Removed ES2015+ rule:
    * `prefer-reflect` was deprecated. See
      http://eslint.org/blog/2016/10/eslint-v3.9.0-released#deprecated-rules

* New global rule:
    * Now disallowing redundant return statements. (`no-useless-return`)

* New ES2015+ rule:
    * Now preventing the use of a default export as a locally named import.
      (`import/no-named-default`)

* Removed dependencies:
    * `babel-cli`
    * `babel-plugin-syntax-trailing-function-commas`
    * `babel-plugin-transform-es2015-destructuring`
    * `babel-plugin-transform-es2015-modules-commonjs`
    * `babel-plugin-transform-es2015-parameters`
    * `babel-register`

* Updated dependencies:
    * `@novivia/build-module` to v0.5.
    * `eslint-plugin-node` to v3.


## v1.6.0 - (27/10/2016)

* Now officially requiring Node 4+ and npm 3+ to work.
* Now recognizing Jest global variables.

* New ES2015+ rules:
    * Now ensuring that inside a `then()` or a `catch()` we always `return` or
      `throw` a raw value instead of wrapping in `Promise.resolve` or
      `Promise.reject`. (`promise/no-return-wrap`)
    * Added new Flow-related rule, applied only to files with the `@flow`
      annotation, so it doesn't become intrusive:
        * Now enforcing consistent separators between properties in object
          types. (`flowtype/object-type-delimiter`)


## v1.5.0 - (17/10/2016)

* New global rule:
    * Now enforcing function names to match the name of the variable or property
      to which they are assigned. (`func-name-matching`)

* Updated dependencies:
    * `eslint-plugin-lodash` to v2.
    * `eslint-plugin-promise` to v3.


## v1.4.0 - (29/09/2016)

* New global rule:
    * Now enforcing `module.exports =` over `exports =`. (`node/exports-style`)

* New frontend rule:
    * Now forbidding require() calls with expressions.
      (`import/no-dynamic-require`)

* New ES2015+ rules:
    * Now forbidding modules to have too many dependencies, maximum set at 30
      for now. (`import/max-dependencies`)
    * Now forbidding import of modules using absolute paths.
      (`import/no-absolute-path`)
    * Now forbidding Webpack loader syntax in imports, save for frontend.
      (`import/no-webpack-loader-syntax`)
    * Added new Flow-related rules, applied only to files with the `@flow`
      annotation, so it doesn't become intrusive:
        * Now checking for duplicate properties in object annotations.
          (`flowtype/no-dupe-keys`)
        * Now enforcing the sorting of object annotations.
          (`flowtype/sort-keys`)

* New React rules:
    * Added React-related exceptions to the `class-methods-use-this` rule.
    * Now preventing the passing of children as props.
      (`react/no-children-prop`)
    * Now preventing invalid characters from appearing in markup.
      (`react/no-unescaped-entities`)

* Addressed an issue where the "frontend" configuration would not properly
  include the "import" plugin.

* Updated dependencies:
    * `babel-eslint` to v7.
    * `eslint-plugin-import` to v2.


## v1.3.0 - (12/09/2016)

* Updated global rule:
    * Now enforcing indentation levels in function declarations and function
      expressions. (`indent`)

* New ES2015+ rules:
    * Added new Flow-related rules, applied only to files with the `@flow`
      annotation, so it doesn't become intrusive:
        * Now enforcing the use of "boolean" for boolean type annotations.
          (`flowtype/boolean-style`)
        * Now enforcing consistent use of trailing commas in Object and Tuple
          annotations. (`flowtype/delimiter-dangle`)
        * Now enforcing consistent use of semicolons after type aliases.
          (`flowtype/semi`)

* New style rules:
    * Now disallowing newlines before directives and requiring them after
      directives. (`lines-around-directive`)
    * Now disallowing `parseInt()` in favor of binary, octal, and hexadecimal
      literals. (`prefer-numeric-literals`)


## v1.2.0 - (01/09/2016)

* New global rules:
    * Now disallowing negating the left operand of relational operators.
      (`no-unsafe-negation`)
    * Now enforcing comparing `typeof` expressions against valid strings.
      (`valid-typeof`)

* New frontend rule:
    * Now forbidding the use of Node.js builtin modules, except `path`.
      (`import/no-nodejs-modules`)

* New ES2015+ rules:
    * Now enforcing that class methods utilize `this`.
      (`class-methods-use-this`)
    * Now disallowing template literal placeholder syntax in regular strings.
      (`no-template-curly-in-string`)
    * Added new Flow-related rules, applied only to files with the `@flow`
      annotation, so it doesn't become intrusive:
        * Now enforcing consistent spacing before the opening of generic type
          annotation parameters. (`flowtype/space-before-generic-bracket`)
        * Now enforcing consistent spacing around union and intersection type
          separators. (`flowtype/union-intersection-spacing`)

* New style rule:
    * Now requiring object keys to be sorted. (`sort-keys`)

* New React rules:
    * Now attempting to prevent problems with children and
      `dangerouslySetInnerHTML`. (`react/no-danger-with-children`)
    * Now preventing definitions of unused prop types.
      (`react/no-unused-prop-types`)
    * Now enforcing the value of the style prop to be an object.
      (`react/style-prop-object`)
    * New accessibility rules:
        * Now enforcing all anchors to contain accessible content.
          (`jsx-a11y/anchor-has-content`)
        * Now enforcing a clickable non-interactive element has at least one
          keyboard event listener. (`jsx-a11y/click-events-have-key-events`)
        * Now enforcing that non-interactive elements have no interactive
          handlers. (`jsx-a11y/no-static-element-interactions`)

* Removed `eslint-plugin-flow-vars` dependency.
* Updated `eslint-plugin-react` dependency to v6.


## v1.1.1 - (01/08/2016)

* Addressed an issue where non-ES2015 code would not have the proper
  configuration for the `no-magic-numbers` rule.
* Removed the `jsx-require-extension` React rule since it was redundant with
  the `extensions` import rule.

* Updated `eslint-plugin-react` dependency to v6-rc.1.


## v1.1.0 - (29/07/2016)

* New global rule:
    * Now disallowing tab characters in files. (`no-tabs`)

* Updated rules:
    * Now requiring no spacing for `MemberExpression` in the `indent` rule.

* Updated `eslint-plugin-react` dependency to v6-rc.0.


## v1.0.0 - (25/07/2016)

* Project now maintained under the Novivia scope (@novivia) and renamed to
  "linter". (formerly "eslint-myrules") Options must now be specified
  using the `novivia-linter` field in the package manifest or using a
  `.novivialinterrc` file.

* New global rules:
    * Now enforcing return statements in callbacks of array’s methods.
      (`array-callback-return`)
    * Now requiring or disallow named function expressions. (`func-names`)
    * Now ensuring that files begin with the Novivia header. (`header/header`)
    * Now enforcing consistent spacing before and after keywords.
      (`keyword-spacing`)
    * Now validating the file name against the default exported value in the
      module. (`filenames/match-exported`)
    * Now enforcing a certain file naming convention.
      (`filenames/match-regex`)
    * Now enforcing a maximum file length of 500 lines, excluding whitespace
      and comments. (`max-lines`)
    * Now enforcing a maximum number of statements allowed per line.
      (`max-statements-per-line`)
    * Now requiring an empty line before return statements.
      (`newline-before-return`)
    * Now disallowing deprecated APIs. (`node/no-deprecated-api`)
    * Now disallowing unnecessary nested blocks. (`no-lone-blocks`)
    * Now disallowing unmodified conditions of loops.
      (`no-unmodified-loop-condition`)
    * Now disallowing control flow statements in finally blocks.
      (`no-unsafe-finally`)
    * Now disallowing unnecessary computed property keys on objects.
      (`no-useless-computed-key`)
    * Now disallowing unnecessary escape usage. (`no-useless-escape`)
    * Now disallowing renaming import, export, and destructured assignments to
      the same name. (`no-useless-rename`)
    * Now disallowing whitespace before properties.
      (`no-whitespace-before-property`)
    * Now enforcing placing object properties on separate lines.
      (`object-property-newline`)
    * Now enforcing spacing between rest and spread operators and their
      expressions. (`rest-spread-spacing`)
    * Now suggesting the correct usage for the shebang. (`node/shebang`)
    * Now disallowing the Unicode Byte Order Mark (BOM). (`unicode-bom`)
    * Security-oriented rules:
        * Now detecting calls to `Buffer` with the `noassert` flag set.
          (`security/detect-buffer-noassert`)
        * Now detecting instances of `child_process` and non-literal
          `cp.exec()`. (`security/detect-child-process`)
        * Now detecting variables in the filename argument of `fs` calls.
          (`security/detect-non-literal-fs-filename`)
        * Now detecting dynamic regular expressions.
          (`security/detect-non-literal-regexp`)
        * Now detecting insecure comparisons.
          (`security/detect-possible-timing-attacks`)
        * Now detecting if `pseudoRandomBytes()` is in use.
          (`security/detect-pseudoRandomBytes`)
        * Now locating potentially unsafe regular expressions.
          (`security/detect-unsafe-regex`)

    * Lo-Dash specific rules:
        * Now disallowing `thisArg` for Lo-Dash method callbacks.
          (`lodash/callback-binding`)
        * Now enforcing a specific chain style. (`lodash/chain-style`)
        * Now ensuring values returned from collection methods are used
          properly. (`lodash/collection-method-value`)
        * Now ensuring a value is always returned in iteratees of Lo-Dash
          collection methods that aren't `forEach`.
          (`lodash/collection-return`)
        * Now enforce a specific function composition direction.
          (`lodash/consistent-compose`)
        * Now enforcing `_.identity` shorthand syntax.
          (`lodash/identity-shorthand`)
        * Now enforcing `_.matches` property shorthand syntax.
          (`lodash/matches-prop-shorthand`)
        * Now enforcing `_.matches` shorthand syntax.
          (`lodash/matches-shorthand`)
        * Now disallowing the use of `.commit()` on chains that should end
          with `.value()`. (`lodash/no-commit`)
        * Now disallowing the use of `.value()` on chains that have already
          ended. (`lodash/no-double-unwrap`)
        * Now disallowing superfluous arguments on Lo-Dash methods with a
          specified arity. (`lodash/no-extra-args`)
        * Now disallowing chaining syntax for single methods.
          (`lodash/no-single-chain`)
        * Now enforcing a specific path style for methods like `get` and
          `property`. (`lodash/path-style`)
        * Now enforcing Lo-Dash chains over nested Lo-Dash calls.
          (`lodash/prefer-chain`)
        * Now enforcing `_.compact` over `_.filter` for only truthy values.
          (`lodash/prefer-compact`)
        * Now enforcing `_.filter` over `_.forEach` with an if statement
          inside. (`lodash/prefer-filter`)
        * Now enforcing `_.flatMap` over consecutive map and `_.flatten`.
          (`lodash/prefer-flat-map`)
        * Now enforcing using `_.get` or `_.has` over expression chains like
          `a && a.b && a.b.c`. (`lodash/prefer-get`)
        * Now enforcing using `_.invoke` over `_.map` with a method call
          inside. (`lodash/prefer-invoke-map`)
        * Now enforcing using `_.isNil` over checks for both null and
          undefined. (`lodash/prefer-is-nil`)
        * Now enforcing using `_.map` over `_.forEach` with a push inside.
          (`lodash/prefer-map`)
        * Now enforcing using `_.matches` over conditions like
          `a.foo === 1 && a.bar === 2 && a.baz === 3`.
          (`lodash/prefer-matches`)
        * Now enforcing using `_.noop` over empty functions.
          (`lodash/prefer-noop`)
        * Now enforcing using `_.overSome` and `_.overEvery` over checks with
          `&&` and `||` for methods that have a boolean check iteratee.
          (`lodash/prefer-over-quantifier`)
        * Now enforcing using `_.reject` over `_.filter` with `!(expression)`
          or `x.prop1 !== value`. (`lodash/prefer-reject`)
        * Now enforcing using `_.prototype.thru` in the chain and not calling
          functions in the initial value. (`lodash/prefer-thru`)
        * Now enforcing using `_.times` over `_.map` without using the
          iteratee's arguments. (`lodash/prefer-times`)
        * Now enforcing using array and string methods in the chain and no
          the initial value. (`lodash/prefer-wrapper-method`)
        * Now enforcing using main method names instead of aliases.
          (`lodash/preferred-alias`)
        * Now enforcing property shorthand syntax. (`lodash/prop-shorthand`)
        * Now preventing chaining without evaluation via `value()` or
          non-chainable methods like `max()`. (`lodash/unwrap`)

* New frontend rule:
    * Now preventing Lo-Dash and React-Bootstrap from being completely
      imported. (`lean-imports/import`)

* New ES2015+ rules:
    * Now ensuring a default export is present, given a default import.
      (`import/default`)
    * Now reporting any invalid exports such as re-exports of the same name.
      (`import/export`)
    * Now ensuring consistent use of file extension within the import path.
      (`import/extensions`)
    * Now ensuring all imports appear before other statements.
      (`import/imports-first`)
    * Now ensuring named imports correspond to a named export in the remote
      file. (`import/named`)
    * Now enforcing a newline after import statements.
      (`import/newline-after-import`)
    * Now disallowing modifying variables of class declarations.
      (`no-class-assign`)
    * Now disallowing arrow functions where they could be confused with
      comparisons. (`no-confusing-arrow`)
    * Now disallowing constant expressions in conditions.
      (`no-constant-condition`)
    * Now reporting imported names marked with @deprecated documentation tag.
      (`import/no-deprecated`)
    * Now disallowing duplicate imports. (`no-duplicate-imports`)
    * Now forbidding the use of mutable exports with `var` or `let`.
      (`import/no-mutable-exports`)
    * Now disallowing the `Symbol` constructor. (`no-new-symbol`)
    * Now ensuring imported namespaces contain dereferenced properties as they
      are dereferenced. (`import/no-namespace`)
    * Now ensuring imports point to a file/module that can be resolved.
      (`import/no-unresolved`)
    * Now disallowing unnecessary constructor. (`no-useless-constructor`)
    * Now suggesting using the rest parameters instead of arguments.
      (`prefer-rest-params`)
    * Now disallowing usage of spacing in template strings.
      (`template-curly-spacing`)
    * Now enforcing spacing around the `*` in `yield*` expressions.
      (`yield-star-spacing`)
    * Now ensuring that a new promise or a value is returned inside a `then()`.
      (`promise/always-return`)
    * Now ensuring that each time a `then()` is applied to a promise, a
      `catch()` is applied as well. (`promise/catch-or-return`)
    * Now enforcing standard parameter names for Promise constructors.
      (`promise/param-names`)
    * Added new Flow-related rules, applied only to files with the `@flow`
      annotation, so it doesn't become intrusive:
        * Now requiring that all function parameters have type annotations.
          (`flowtype/require-parameter-type`)
        * Now requiring that functions have return type annotation.
          (`flowtype/require-return-type`)
        * Now verifying that files have a valid `@flow` annotation. It will
          report annotations with typos (such as `// @floww`) or not placed at
          the top of the file. (`flowtype/require-valid-file-annotation`)
        * Now enforcing consistent spacing after the type annotation colon.
          (`flowtype/space-after-type-colon`)
        * Now enforcing consistent spacing before the type annotation colon.
          (`flowtype/space-before-type-colon`)
        * Now enforcing a consistent naming pattern for type aliases.
          (`flowtype/type-id-match`)

* New style rules:
    * Now requiring a newline after each call in a method chain.
      (`newline-per-chained-call`)
    * Now disallowing nested ternary expressions. (`no-nested-ternary`)
    * Now disallowing spacing between function identifiers and their
      applications. (`no-spaced-func`)
    * Now disallowing a space before function parenthesis.
      (`space-before-function-paren`)

* New React rules:
    * Now disallowing spaces around equal signs in JSX attributes.
      (`react/jsx-equals-spacing`)
    * Now restricting file extensions that may contain JSX to `.jsx`.
      (`react/jsx-filename-extension`)
    * Now preventing the usage of unsafe `target="_blank"`.
      (`react/jsx-no-target-blank`)
    * Now preventing comments from being inserted as text nodes.
      (`react/jsx-no-comment-textnodes`)
    * Now enforcing the position of the first prop in JSX.
      (`react/jsx-first-prop-new-line`)
    * Now enforcing alphabetical props sorting. (`react/jsx-sort-props`)
    * Now validating spacing before closing bracket in JSX.
      (`react/jsx-space-before-closing`)
    * Now preventing usage of the return value of `React.render`.
      (`react/no-render-return-value`)
    * Now enforcing stateless React components to be written as pure
      functions. (`react/prefer-stateless-function`)
    * Now enforcing React components to have a `shouldComponentUpdate` method.
      (`react/require-optimization`)
    * Now enforcing ES2015+ classes extending `React.Component` to return
      a value in their render function. (`react/require-render-return`)

* Updated rules:
    * Reduced the minimum identifier length to 2 in the `id-length` rule, as
      there were too many relevant 3-letter identifiers.
    * Now ignoring array indexes in the `no-magic-numbers` rule.

* Removed rules:
    * `no-negated-condition`

* New dependencies:
    * `@novivia/open-sourcer`
    * `babel-cli`.
    * `babel-plugin-syntax-trailing-function-commas`.
    * `babel-plugin-transform-es2015-destructuring`.
    * `babel-plugin-transform-es2015-modules-commonjs`.
    * `babel-plugin-transform-es2015-parameters`.
    * `babel-register`.
    * `eslint-plugin-filenames`.
    * `eslint-plugin-flowtype`.
    * `eslint-plugin-header`.
    * `eslint-plugin-import`.
    * `eslint-plugin-jsx-a11y`.
    * `eslint-plugin-lean-imports`.
    * `eslint-plugin-lodash`.
    * `eslint-plugin-markdown`.
    * `eslint-plugin-new-with-error`.
    * `eslint-plugin-node`.
    * `eslint-plugin-promise`.
    * `eslint-plugin-security`.
    * `eslint-plugin-you-dont-need-lodash-underscore`.

* Updated dependencies:
    * `@novivia/build-module` to v0.3.
    * `babel-eslint` to v6.
    * `eslint` to v3.
    * `eslint-plugin-flow-vars` to v0.4.
    * `eslint-plugin-react` to v6-alpha.2.


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
