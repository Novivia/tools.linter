var utils = require("eslint-myrules-manager").utils;
var path = require("path");

module.exports = function(enableReact, rules) {
  if(enableReact) {
    rules = utils.mergeRules(rules,
      utils.readRules(path.resolve(__dirname, "react.eslintrc"))
    );
  }
  return rules;
};
