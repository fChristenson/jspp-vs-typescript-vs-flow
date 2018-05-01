const path = require("path");

module.exports = {
  entry: {
    flow: path.join(__dirname, "src", "flow", "main")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.join(__dirname, "src", "flow"),
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  mode: "development"
};
