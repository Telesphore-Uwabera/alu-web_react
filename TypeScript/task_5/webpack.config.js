const path = require('path');

module.exports = {
  entry: './js/main.ts',  // Correct the entry path to your actual main.ts file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  },
  mode: 'development' // Set mode to 'development' to avoid the warning
};
