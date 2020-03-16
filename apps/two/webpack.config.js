const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
      // alias: {
      //   common: path.resolve(__dirname, '../../common')
      // },
      // modules: ['./node_modules', path.resolve('./node_modules')]
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
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.BUNDLE_ANALYZER_ENABLED ? 'static' : 'disabled'
      })
    ],
    devServer: {
      port: argv.port,
      stats: "minimal",
      contentBase: path.resolve('dist')
    }
  };
};
