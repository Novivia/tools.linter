/**
 * Copyright 2013-present, Novivia, Inc.
 * All rights reserved.
 */

import {join as joinPath} from "path";
import {utils} from "eslint-myrules-manager";

const {
  mergeRules,
  readRules,
} = utils;

function makeModifier({file, modifier = modifierMerge}) {
  return (apply, rules) => modifier({
    file,
    apply,
    rules,
  });
}

function modifierMerge({apply, file, rules}) {
  if (!apply) {
    return rules;
  }

  return mergeRules(rules, readRules(file));
}

function noMerge({apply, ...args}) {
  return modifierMerge({
    ...args,
    apply: !apply,
  });
}

export const codeStyle = makeModifier({
  file: joinPath(__dirname, "code_style.eslintrc"),
  modifier: noMerge,
});

export const es2015 = makeModifier({
  file: joinPath(__dirname, "es2015.eslintrc"),
});

export const react = makeModifier({
  file: joinPath(__dirname, "react.eslintrc"),
});
