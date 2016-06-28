var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './frontend/app.ts',
  output: {
    path: './build',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.d.ts'],
    // NB(echelon): Only configured because bower is used for `buzz.js`,
    // otherwise the default suffices.
    modulesDirectories: [
      'node_modules',
      'bower_components',
      path.resolve(__dirname, './frontend'),
    ]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },

  plugins: [
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
  ],

  externals: {
    //'jquery': 'jquery',
  },
}
