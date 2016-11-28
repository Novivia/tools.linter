/**
 * Copyright 2013-present, Novivia, Inc.
 * All rights reserved.
 */

import {resolve as resolvePath} from "path";
import {
  es2015,
  codeStyle,
  react,
} from "./modifiers";

module.exports = {
  defaultConfig: {
    cliConfig: {
      ignorePattern: "coverage",
    },
    modifiers: {
      frontend: {react: true},
      global: {
        es2015: true,
        "no-code-style": false,
      },
    },
  },
  extensions: [
    ".js",
    ".jsx",
    ".md",
  ],
  modifiers: {
    es2015,
    "no-code-style": codeStyle,
    react,
  },
  targetsPath: {
    frontend: resolvePath(__dirname, "rules", "frontend.eslintrc"),
    global: resolvePath(__dirname, "rules", "global.eslintrc"),
  },
};
