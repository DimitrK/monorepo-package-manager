const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babelConfig = require("../../babel.config");

module.exports = (env, argv) => {
  const isDev = process.env.NODE_ENV !== "production";
  return {
    mode: isDev ? "development" : "production",
    entry: ["./index.js"],
    output: {
      path: path.resolve('dist'),
      filename: isDev ? "[name].js" : "[name].[contenthash].js"
    },
    resolve: {
      extensions: ["*", ".js"],
      alias: {
        common: path.resolve(__dirname, '../../common')
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /[\\/]node_modules[\\/]/,
          use: {
            loader: 'babel-loader',
            options: {
              ...babelConfig
            }
          }
        }
      ]
    },
    devtool: isDev ? "source-map" : "hidden-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        showErrors: true,
        template: "./index.html"
      })
    ],
    devServer: {
      port: argv.port,
      stats: "minimal",
      contentBase: path.resolve('dist')
    }
  };
};
