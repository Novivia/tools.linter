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
  targetsPath: {
    global: resolvePath(__dirname, "rules", "global.eslintrc"),
    frontend: resolvePath(__dirname, "rules", "frontend.eslintrc"),
  },
  modifiers: {
    es2015,
    "no-code-style": codeStyle,
    react,
  },
  extensions: [
    ".js",
    ".jsx",
    ".md",
  ],
  defaultConfig: {
    modifiers: {
      frontend: {react: true},
      global: {
        es2015: true,
        "no-code-style": false,
      },
    },
  },
};
