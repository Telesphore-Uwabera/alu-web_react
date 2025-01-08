// webpack.config.js
const path = require('path');

module.exports = {
  entry: './js/main.ts', // Ensure this matches the actual location of main.ts
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development', // Change to 'production' as needed
};
