var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const workboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // the 'transform-runtime' plugin tells Babel to
      // require the runtime instead of inlining it.
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  mode: "development",
  plugins: [
    new Dotenv({ safe: false }),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new workboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    open: {
      app: ["chrome"],
    },
    port: 3001,
    historyApiFallback: true,
  },
  performance: { hints: false },
};
