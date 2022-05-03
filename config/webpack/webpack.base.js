const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../..');
const DIST_PATH = path.resolve(PROJECT_ROOT, 'dist');
const SRC_PATH = path.resolve(PROJECT_ROOT, 'src');
const CONFIG_PATH = path.resolve(PROJECT_ROOT, 'config');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: path.resolve(SRC_PATH, 'index.tsx'),
  output: {
    path: DIST_PATH,
    filename: '[name].js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve('src'),

        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css?$/,
        exclude: [],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(svg)$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@src': SRC_PATH,
      '@Redux': path.resolve(SRC_PATH, 'Redux'),
      '@components': path.resolve(SRC_PATH, 'components'),
      '@pages': path.resolve(SRC_PATH, 'pages'),
      '@mocks': path.resolve(SRC_PATH, 'mocks'),
      '@constants': path.resolve(SRC_PATH, 'constants'),
      '@services': path.resolve(SRC_PATH, 'services'),
    },
  },
  plugins: [
    new Dotenv({
      path: path.resolve(CONFIG_PATH, '.env'),
      systemvars: true,
    }),
  ],
};
