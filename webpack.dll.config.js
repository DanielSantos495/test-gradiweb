const path = require('path')
const { DllPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
   entry: {
      modules: [
         'react',
         'react-dom',
         'prop-types'
      ]
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].dll.js',
      library: '[name]'
   },
   optimization: {
      minimize: true,
      minimizer: [
         // Minizar más el js
         new TerserJsPlugin(),
         // Minizar aún más el css
         new OptimizeCssAssetsWebpackPlugin()
      ]
   },
   plugins: [
      new DllPlugin({
         name: '[name]',
         path: path.resolve(__dirname, '[name]-manifest.json')
      }),
      new CleanWebpackPlugin({
         cleanOnceBeforeBuildPatterns: ['**/modules.*']
      })
   ]
}