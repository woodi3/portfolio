const Dotenv = require("dotenv-webpack");
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new Dotenv({
      path: "./.env.development"
    })
  ],
  // /dist folder will be used to serve our application to the browser
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
  }
};
