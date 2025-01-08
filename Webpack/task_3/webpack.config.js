const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',  // Set mode to development
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',  // Use the module name as the filename
    path: path.resolve(__dirname, 'dist'),  // Output to the 'dist' folder
  },
  devServer: {
    static: path.join(__dirname, 'public'),  // Use 'static' instead of 'contentBase'
    port: 8564,
    open: true,  // Automatically open the browser when the server starts
  },
  optimization: {
    splitChunks: {
      chunks: 'all',  // Split all chunks, including node_modules
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Target all .css files
        use: ['style-loader', 'css-loader'],  // Apply both loaders to CSS files
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Clean build folder before each build
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Ensure this points to your template
    }),
  ],
};
