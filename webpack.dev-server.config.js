var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './'),  // New
  devtool: 'eval-source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',                          // New
		filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
    }, {
      test: /\.woff$/,
      loader: 'file-loader?name=font/[name].[ext]?[hash]'
    }, {
      test: /\.png$/,
      loader: 'file-loader?name=images/[name].[ext]?[hash]'
    }, {
      test: /\.jade$/,
      loader: 'jade-react-loader'
    }, {
      test: /\.md$/,
      loader: 'html-loader!markdown-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: 'body' })
  ]
};
