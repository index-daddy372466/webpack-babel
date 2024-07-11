require("dotenv").config();
const MiniCss = require("mini-css-extract-plugin");
const HtmlPlug = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // mode
  mode:
    !process.env._ENV_ || process.env._ENV_ !== "production"
      ? "development"
      : process.env._ENV_,
  // entry
  entry: path.resolve(__dirname, "src/index.js"),
  devtool: !process.env._ENV_ !=='production' ? 'inline-source-map' : false,
  // module/rules
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', "css-loader", "postcss-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlPlug({
      filename: "index.html",
      template: "src/template/template.html",
      inject: "body",
    }),
    // new MiniCss()
  ],

  // dev server
  devServer:{
    open:false,
    static:{
        directory:path.resolve(__dirname,'dist')
    },
    port:3445,
    hot:true,
  }
  ,
  // exit/output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
};
