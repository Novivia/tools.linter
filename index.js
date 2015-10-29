var path = require("path");
var modifiers = require("./modifiers");

module.exports = {
  targetsPath: {
    global: path.resolve(__dirname, "rules", "global.eslintrc"),
    frontend: path.resolve(__dirname, "rules", "frontend.eslintrc")
  },
  modifiers: {
    es2015: modifiers.es2015,
    "no-code-style": modifiers.codeStyle,
    react: modifiers.react,
  },
  defaultConfig: {
    modifiers: {
      frontend: {
        react: true,
      },
      global: {
        "no-code-style": false,
        es2015: true,
      }
    },
  }
};
