const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR,
//   },
//   module: {
//     rules: [{
//       test: /\.jsx?/,
//       include: SRC_DIR,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015'],
//       },
//     },
//     {
//       test: /\.css$/,
//       use: [{
//         loader: 'style-loader',
//       },
//       {
//         loader: 'css-loader',
//         options: {
//           sourceMap: true,
//           modules: true,
//           localIdentName: '[local]___[hash:base64:5]',
//         }
//       }
//       ]
//     }
//     ]
//   },
// };
module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};