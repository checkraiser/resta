module.exports = {
  context: __dirname + '/javascripts',
  entry: ['babel-polyfill','./webpack_application.js'],
  watch: true,
  output: {
    filename: 'webpack.bundle.js',
    path: __dirname + '/javascripts',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "javascripts"]
  },
};