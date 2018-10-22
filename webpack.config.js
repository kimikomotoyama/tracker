const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            ['@babel/plugin-proposal-decorators', {
              legacy: true
            }],
            ['@babel/plugin-proposal-class-properties', {
              loose: true
            }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000
  }
}