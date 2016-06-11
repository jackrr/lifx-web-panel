var webpack = require('webpack');

module.exports = {
   entry: './src/app.js',
   output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-class-properties']
      }
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
