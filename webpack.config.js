const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      { 
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[ext]",
        }
      }
    ]
  },
  mode: "development",

  entry: {
    main: path.resolve(__dirname, "src/script.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]",
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
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },

     // for images
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use:
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: '[name].[ext]',
      //         // outputPath: "images/",
      //         publicPath: path.build(path.dirname(__dirname)),
      //       }
      //     }
      // }, 
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: './src/index.html',
      // minify: {
      //   collapseWhitespace: true,
      // }
    })
  ]
};
