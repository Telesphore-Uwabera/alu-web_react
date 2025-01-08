const path = require('path'); // Import the path module

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Use the path module to resolve the output path
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve .ts and .js extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Process .ts files
        use: 'ts-loader',
        exclude: /node_modules/, // Exclude node_modules from being processed
      },
    ],
  },
  mode: 'development', // Set to 'production' for production build
};
