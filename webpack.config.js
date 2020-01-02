const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
          test: /\.(html)$/,
          use: 'html-loader' 
            
        }
      ]
   }
};