const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  // exclude node modules, and use the babel-loader to load javascript files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          }
          // 'file-loader'
        ]
      }
    ]
  },
  // resolve other file extensions before javascript files
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  // bundled source files should be put in the dist folder as bundle.js
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/",
    filename: "[name].[hash].js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../", "src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    })
  ]
};
