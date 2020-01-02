const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, './'),
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            }
          ]
        }
      ]
   }
};
