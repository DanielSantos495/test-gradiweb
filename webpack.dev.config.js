const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
   entry: path.resolve(__dirname, 'src/index.jsx'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   devServer: {
      port: 9000,
      hot: true,
      open: true
   },
   module: {
      rules: [
         {
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.css|scss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.png|jpe?g/,
            use: [
               {
                  loader: 'file-loader'
               }
            ]
         }
      ]
   },
   plugins: [
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/index.html'),
         filename: 'index.html'
      })
   ]
}