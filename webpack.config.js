const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
// eslint-disable-next-line no-unused-vars
//  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      Colors: path.join(__dirname, 'src/data/colors.json'),
      Data: path.join(__dirname, 'src/data/'),
      Common: path.join(__dirname, 'src/components/common/'),
      Footer: path.join(__dirname, 'src/components/common/Footer.jsx'),
      Icon: path.join(__dirname, 'src/components/common/Icon.jsx'),
      Input: path.join(__dirname, 'src/components/common/Input.jsx'),
      Head: path.join(__dirname, 'src/components/common/Head.jsx'),
      Navbar: path.join(__dirname, 'src/components/common/Navbar.jsx'),
      Styles: path.join(__dirname, 'src/components/common/Styles.jsx'),
      Constants: path.join(__dirname, 'src/data/constants.js'),
      Assets: path.join(__dirname, 'assets/'),
    },
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3004,
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
        test: /\.(pdf|png|svg|jpg|gif|woff(2)?|ttf)$/,
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new GenerateSW(),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
      { from: '_redirects', to: '_redirects', toType: 'file' },
      { from: 'robots.txt', to: 'robots.txt', toType: 'file' },
      { from: 'sitemap.xml', to: 'sitemap.xml', toType: 'file' },
    ]),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
