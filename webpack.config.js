const path = require("path");

module.exports = {
  entry: {
    flow: path.join(__dirname, "src", "flow", "main"),
    typescript: path.join(__dirname, "src", "typescript", "main.ts")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.join(__dirname, "src", "flow"),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts/,
        include: path.join(__dirname, "src", "typescript"),
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  mode: "development"
};
