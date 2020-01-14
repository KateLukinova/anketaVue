var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: './assets/css/index.css'
});

module.exports = {
  entry: [
      './src/main.js',
      './src/assets/scss/index.scss'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'vue-style-loader',
                  'css-loader'
              ],
          },
          {
              test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              include: [path.resolve(__dirname, 'src', 'fonts')],
              use: [{
                  loader: 'file-loader'
              }]
          },
          {
              test: /\.scss$/,
              include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
              use: extractPlugin.extract({
                  use: ['css-loader', 'sass-loader'],
                  fallback: 'style-loader'
              })
          },
          {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                  loaders: {}
                  // other vue-loader options go here
              }
          },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]?[hash]'
              }
          }
      ]
  },
  plugins: [
      extractPlugin
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool:
    '#eval-source-map'
  };

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
