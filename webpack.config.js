const CopyWebpackPlugin = require("copy-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const path = require("path");
const sourceMapSupport = require("source-map-support");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

sourceMapSupport.install({
  environment: "node"
});

module.exports = (option) => {
  return {
    ...option,
    devtool: "source-map",
    entry: option.entry.replace("\\main.ts", "\\blogspace-service-application.ts"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.js",
      libraryTarget: "commonjs2"
    },
    optimization: {
      ...option.optimization,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            keep_classnames: true
          }
        })
      ]
    },
    plugins: [
      ...option.plugins,
      new EslintWebpackPlugin({
        cache: false,
        extensions: ["js", "ts"]
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "resources",
            to: "resources"
          }
        ]
      }),
      new DotenvWebpackPlugin({
        path: path.join(
          __dirname,
          process.env.NODE_ENV === "production" ? "environments\\.env" : `environments\\.env.${process.env.NODE_ENV}`
        )
      })
    ]
  };
};
