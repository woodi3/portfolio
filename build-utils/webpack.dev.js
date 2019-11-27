const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
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
  plugins: [
    new Dotenv({
      path: "./.env.development"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    })
  ],
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/",
    filename: "[name].[hash].js"
  },
  // /dist folder will be used to serve our application to the browser
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true
  }
};
