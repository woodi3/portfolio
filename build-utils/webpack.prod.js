const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "portfolio/assets/"
            }
          }
          // 'file-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/portfolio/",
    filename: "[name].[hash].js"
  },
  plugins: [
    new Dotenv({
      path: "./.env.production"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      publicPath: "/portfolio"
    })
  ]
};
