const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    main: path.resolve(__dirname, "src/script.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]",
    //       clean: true,
  },

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5001,
    hot: true,
    open: true,
  },


  module: {
    rules: [
      // for css
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      // for images
      { test: /\.(ico|svg|jpeg|jpg|gif)$/, type: "asset/resource" },
    ],
  },
};
