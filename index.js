var path = require("path");

module.exports = {
  targetsPath: {
    global: path.resolve(__dirname, "rules/global.eslintrc"),
    frontend: path.resolve(__dirname, "rules/frontend.eslintrc")
  },
  modifiers: {
    frontend: {
      react: require("./modifiers/react")
    }
  },
  defaultConfig: {
    modifiers: {
      react: true
    }
  }
};
