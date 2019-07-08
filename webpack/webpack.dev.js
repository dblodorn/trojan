const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')
const { htmlOptions } = require('./build.config.js')

module.exports = merge(common, {
  devServer: {
    publicPath: "/",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...htmlOptions,
      template: './templates/index.dev.pug'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
