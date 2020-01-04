const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
   module: {
      rules: [
         {
           test: /\.jsx/,
           use: {
              loader: 'babel-loader'
          },
           exclude: /node_modules/
         },
         {
            test: /\.css/,
            use: ['style-loader', 'css-loader']
         },
        {
          test: /\.(pdf|png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: './src/index.html'
     }),
     new CopyPlugin([
       {from: 'assets', to: 'assets'}
     ])
   ]
};