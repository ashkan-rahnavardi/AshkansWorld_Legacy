const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000,
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
    //  {
    //     test: /\.(png|jpe?g|gif)$/i,
    //     use: {
    //       loader: 'url-loader',
    //       options: {
    //         limit: 8192,
    //         name: '[name].[ext]',
    //       },
    //     }
    //  } 
    //  {
    //   test: /\.(gif|png|jpe?g|svg)$/i,
    //   use: [
    //     'file-loader',
    //     {
    //       loader: 'image-webpack-loader',
    //       options: {
    //         bypassOnDebug: true, // webpack@1.x
    //         disable: true, // webpack@2.x and newer
    //       },
    //     },
    //   ],
    //  }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}