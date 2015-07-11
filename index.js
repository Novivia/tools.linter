var path = require("path");
var modifiers = require("./modifiers");

module.exports = {
  targetsPath: {
    global: path.resolve(__dirname, "rules", "global.eslintrc"),
    frontend: path.resolve(__dirname, "rules", "frontend.eslintrc")
  },
  modifiers: {
    frontend: {
      react: modifiers.react,
    },
    global: {
      "no-code-style": modifiers.codeStyle,
      "es2015": modifiers.es2015
    }
  },
  defaultConfig: {
    modifiers: {
      es2015: true,
      react: true,
      "no-code-style": false
    }
  }
};
