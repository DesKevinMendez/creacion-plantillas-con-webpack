const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  mode: "development",
  entry: './src',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'bundle.js',

  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ],
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin("app.css"),
  ]
};