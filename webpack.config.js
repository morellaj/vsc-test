const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(pdf|png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|webp)$/,
        use: [
          'webp-loader',
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg|png|jpg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
      { from: '_redirects', to: '_redirects' },
    ]),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
