const base = {
  plugins: [],
  extends: ["plugin:prettier/recommended"],
  rules: {}
};

const baseJS = {
  plugins: [...base.plugins],
  extends: ["eslint:recommended", ...base.extends],
  rules: {
    ...base.rules
  }
};

const baseTS = {
  plugins: [...baseJS.plugins, "@typescript-eslint/eslint-plugin"],
  extends: [...baseJS.extends, "plugin:@typescript-eslint/recommended"],
  rules: {
    ...baseJS.rules
  }
};

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  overrides: [
    {
      files: ["*.js"],
      parserOptions: {
        ecmaVersion: 2022
      },
      plugins: baseJS.plugins,
      extends: baseJS.extends,
      rules: baseJS.rules
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "tsconfig.json",
        ecmaVersion: 2022,
        sourceType: "module"
      },
      plugins: baseTS.plugins,
      extends: baseTS.extends,
      rules: baseTS.rules
    },
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      parserOptions: {
        jsonSyntax: "JSON"
      },
      extends: ["plugin:jsonc/recommended-with-json"],
      rules: {
        "jsonc/array-bracket-newline": "error",
        "jsonc/array-bracket-spacing": "error",
        "jsonc/array-element-newline": "error",
        "jsonc/comma-style": "error",
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": "error",
        "jsonc/no-irregular-whitespace": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": "error",
        "jsonc/object-curly-spacing": "error",
        "jsonc/object-property-newline": "error"
      }
    },
    {
      files: ["*.md"],
      parser: "eslint-plugin-markdownlint/parser",
      extends: ["plugin:markdownlint/recommended"]
    }
  ]
};
