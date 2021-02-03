const path = require('path')
const { DllReferencePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
   entry: {
      app: path.resolve(__dirname, 'src/index.jsx')
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: './'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   optimization: {
      minimize: true,
      minimizer: [
         // Este es para minizar más el js
         new TerserJsPlugin(),
         // Este es para minizar aún más el css
         new OptimizeCssAssetsWebpackPlugin()
      ]
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.css|scss$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader
               },
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(png|jpe?g)/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     name: '[hash].[ext]',
                     outputPath: './assets/static/',
                     limit: 9000
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/index.html'),
         filename: 'index.html'
      }),
      new DllReferencePlugin({
         manifest: require('./modules-manifest.json')
      }),
      new MiniCssExtractPlugin({
         filename: 'styles/[name].[hash].css'
      }),
      new CleanWebpackPlugin({
         cleanOnceBeforeBuildPatterns: ['**/app.*']
      }),
      new AddAssetHtmlWebpackPlugin( {
         filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
         outputPath: 'js',
         publicPath: 'js'
      })
   ]
}