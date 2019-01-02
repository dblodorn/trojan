const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const FetchJsonWebpackPlugin = require('fetch-json-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const common = require('./webpack.common.js')
const {
  htmlOptions
} = require('./build.config.js')

const pathsToClean = [
  './dist'
]

const cleanOptions = {
  exclude: ['_redirects'],
  root: process.cwd(),
  verbose: true,
  dry: false
}

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new FetchJsonWebpackPlugin({
      endpoint: 'https://gems.dmbk.io/wp-json/api/v1/data/',
      filename: 'data',
      hash: true,
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/**/*',
        to: './'
      }
    ]),
    new HtmlWebpackPlugin({
      ...htmlOptions,
      template: './templates/index.prod.pug'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return;
        }
        console.log(message);
      },
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    })
  ]
})
