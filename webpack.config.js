/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts",
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.hbs/,
        loader: "handlebars-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset"
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              useRelativePath: true,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].less",
    }),
  ],
};
