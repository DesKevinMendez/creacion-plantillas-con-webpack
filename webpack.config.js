const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('./[name].css');



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
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      }
    ],
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin('app.css'),
    extractCSS
  ]
};