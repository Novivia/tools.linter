var utils = require("eslint-myrules-manager").utils;
var path = require("path");

function modifierMerge(file, apply, rules) {
  if (apply) {
    rules = utils.mergeRules(rules, utils.readRules(file));
  }
  return rules;
}

function noMerge(file, dontApply, rules) {
  return modifierMerge(file, !dontApply, rules);
}

module.exports = {
  react: modifierMerge.bind(null, path.join(__dirname, "react.eslintrc")),
  es2015: modifierMerge.bind(null, path.join(__dirname, "es2015.eslintrc")),
  codeStyle: noMerge.bind(null, path.join(__dirname, "code_style.eslintrc")),
};
