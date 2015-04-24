var path = require("path");

module.exports = {
  targetsPath: {
    global: path.resolve(__dirname, "rules/global.eslintrc"),
    frontend: path.resolve(__dirname, "rules/frontend.eslintrc")
  },
  modifiers: {
    frontend: {
      react: require("./modifiers/react"),
    },
    global: {
      "no-code-style": require("./modifiers/code_style"),
    }
  },
  defaultConfig: {
    modifiers: {
      react: true,
      "no-code-style": false
    }
  }
};
