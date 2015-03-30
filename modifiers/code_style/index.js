var utils = require("eslint-myrules-manager").utils;
var path = require("path");

module.exports = function(noCodeStyle, rules) {
  if(!noCodeStyle) {
    rules = utils.mergeRules(
      rules,
      utils.readRules(path.resolve(__dirname, "code_style.eslintrc"))
    );
  }
  return rules;
};
