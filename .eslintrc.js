module.exports = {
  root: true,
  overrides: [
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
