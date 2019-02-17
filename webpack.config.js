const path = require('path');

const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  mode: 'development',
  resolve: {
		extensions: ['.js', '.vue', '.json', '.scss'],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};