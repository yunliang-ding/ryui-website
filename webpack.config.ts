const path = require("path")
const os = require('os')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
function getIPAdress() {
  let localIPAddress = "";
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        localIPAddress = alias.address;
      }
    }
  }
  return localIPAddress;
}
const config = {
  entry: './src/index.tsx',
  output: {
    path: process.env.NODE_ENV == "production" ? path.resolve(__dirname, './out/frontend/public/') : path.resolve(__dirname, 'www/'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      ryui: path.join(__dirname, './src/yui')
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/, /public/],
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['env', 'react'],
          plugins: [
            'transform-decorators-legacy',
            'add-module-exports',
            'transform-class-properties',
            'transform-object-rest-spread',
          ]
        }
      }
    }, {
      test: /\.(png|jpg|gif|svg|ttf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }
    },{
      test: /\.css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader' }
      ]
    },
    {
      test: /\.less/,
      include: [ //样式只应用到这两个文件夹下面的css文件中
        path.resolve(__dirname, './src')
      ],
      use: [
        { loader: MiniCssExtractPlugin.loader },
        {
          loader: 'css-loader'
        },
        {
          loader: 'less-loader',
          options: { javascriptEnabled: true }
        }
      ]
    },
    {
      test: /\.(tsx|ts)?$/,
      exclude: [/node_modules/, /public/],
      use: ['ts-loader']
    }]
  },
  devServer: {
    host: getIPAdress(),
    port: 9000,
    hot: true,
    compress: true,
    contentBase: './www'
  },
  optimization: process.env.NODE_ENV === "production" ? {
    minimize: true
  } : {},
  performance: {
    hints: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css'
    }),
  ],
  mode: process.env.NODE_ENV == "development" ? "development" : "production"
}
module.exports = config