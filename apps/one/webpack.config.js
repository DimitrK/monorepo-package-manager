const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
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
      plugins: [
        PnpWebpackPlugin,
      ],
      extensions: ["*", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /[\\/]node_modules[\\/]/,
          use: {
            loader: require.resolve('babel-loader'),
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
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.BUNDLE_ANALYZER_ENABLED ? 'static' : 'disabled'
      })
    ],
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)]
    },
    devServer: {
      port: argv.port,
      stats: "minimal",
      contentBase: path.resolve('dist')
    }
  };
};
