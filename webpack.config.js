// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Set the mode to development for better debugging
  mode: 'development',

  // Entry point of your application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js', // Name of the bundled JavaScript file
    publicPath: '/', // Public path for assets
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply to .js and .jsx files
        exclude: /node_modules/, // Don't process files in node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for ES6+ and React
          },
        },
      },
      {
        test: /\.css$/, // Apply to .css files
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Loaders for CSS and PostCSS (for Tailwind)
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // For images
        type: 'asset/resource',
      },
    ],
  },

  // Resolve extensions to allow importing without specifying them
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from 'public'
    },
    compress: true, // Enable gzip compression
    port: 3000, // Port to run the dev server on
    open: true, // Open browser automatically
    historyApiFallback: true, // Fallback to index.html for client-side routing
  },

  // Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your public/index.html as a template
      filename: 'index.html', // Output HTML file name
    }),
  ],
};
