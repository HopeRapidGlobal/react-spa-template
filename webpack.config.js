const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
    new Dotenv({
      path: `./.envs/${env.env}.env`,
    }),
  ],
  resolve: {
    fallback: {
      fs: false,
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 3003,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
});
