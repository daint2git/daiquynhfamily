const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const assetsPath = path.resolve(rootDir, 'assets')
const buildPath = path.resolve(rootDir, 'build')

module.exports = (_, argv = {}) => {
  const mode = argv.mode || 'development'
  const isDevelopment = mode === 'development'
  return {
    mode,
    entry: {
      app: `${srcPath}/app.js`,
    },
    output: {
      path: buildPath,
      publicPath: '/',
      filename: isDevelopment ? '[name].js' : '[name].[chunkhash].js',
      chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          include: srcPath,
          exclude: /node_modules/,
        },
        {
          test: /\.(c|sc)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: isDevelopment
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : 'css-[hash:base64:8]',
              },
            },
            'postcss-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: isDevelopment ? '[name].[ext]' : '[name].[hash].[ext]',
            },
          },
        },
      ],
    },
    resolve: {
      modules: [srcPath, 'node_modules'],
      extensions: ['.js', '.scss'],
    },
    optimization: isDevelopment
      ? {
          splitChunks: {
            name: 'vendor',
            chunks: 'all',
          },
        }
      : {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                warnings: false,
                compress: {
                  comparisons: false,
                },
                parse: {},
                mangle: true,
                output: {
                  comments: false,
                  ascii_only: true,
                },
              },
              parallel: true,
              cache: true,
              sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
          ],
          nodeEnv: 'production',
          sideEffects: true,
          concatenateModules: true,
          runtimeChunk: 'single',
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: 10,
            minSize: 0,
          },
        },
    plugins: [
      new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(isDevelopment),
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new HtmlWebpackPlugin({
        template: `${assetsPath}/template.html`,
        favicon: `${assetsPath}/favicon.ico`,
        hash: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      }),
    ],
    devServer: isDevelopment
      ? {
          contentBase: buildPath,
          host: '0.0.0.0',
          port: 6969,
          historyApiFallback: true,
        }
      : {},
    target: 'web',
  }
}
