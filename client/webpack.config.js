/*
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      serviceworker: './src/js/src-sw.js',
    },
    output: {
      filename: '[name].bundle.js',
      publicPath: "",
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['main'],
        filename: 'index.html',
      }),
      
      new InjectManifest({
        swSrc: './src/js/src-sw.js',
        swDest: 'service-worker.js',
      
      }),
      

      new WebpackPwaManifest({
        fingerprints: false,
        inject: false,
        name: 'Just another text editor',
        short_name: 'JATE',
        description: 'Just another text editor',
        background_color: '#01579b',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512, 1024], // multiple sizes
            destination: path.join('./assets', 'icons'),
          }
        ],
      })
      
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
              },
            },
          },
      
      ],
    },
  };
};
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      serviceworker: './src/js/src-sw.js',
    },
    output: {
      filename: '[name].bundle.js',
      publicPath: "",
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
        inject: true,
        chunks: ['main'],
        filename: 'index.html',
      }),
      new InjectManifest({
        swSrc: './src/js/src-sw.js',
        swDest: 'src-sw.js',
      }),
  
      new WebpackPwaManifest({
        fingerprints: false,
        inject: false,
        name: 'Just another text editor',
        short_name: 'JATE',
        description: 'Just another text editor',
        background_color: '#01579b',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: path.resolve(__dirname, 'src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('./assets', 'icons'),
          }
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
              //plugins: ['@babel/plugin-transform-runtime'],
              //presets: ['@babel/plugin-proposa
            },
          },
        },
      ],
    },
  };
};




