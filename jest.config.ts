import { JestConfigWithTsJest, pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const configuration: JestConfigWithTsJest = {
  testEnvironment: "node",
  rootDir: "src",
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: __dirname
  }),
  setupFiles: ["<rootDir>/../.jest/env.ts"],
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage"
};

export default configuration;
