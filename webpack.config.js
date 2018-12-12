var webpack = require('webpack');
module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/, // include .js files
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }]      
    }]
  }  
}
