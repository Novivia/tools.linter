/**
 * Copyright 2013-present, Novivia, Inc.
 * All rights reserved.
 */

if (!global.__BUILDING__) {
  require("@novivia/babel")();
}

// Overrides.
const managerConfig = require("eslint-myrules-manager/lib/config");

managerConfig.pkgConfigName = "novivia-linter";
managerConfig.configFilename = ".novivialinterrc";

const execute = require("eslint-myrules-manager").execute;
const myRules = require("./");

execute(myRules, process.argv);
