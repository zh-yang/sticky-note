var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: path.join(__dirname,'js/app/index.js'),
	output: {
		path: path.join(__dirname,'../public/js'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ['style-loader','css-loader','less-loader']
			}
		]
	},
	resolve: {
		alias: {
			jquery: path.join(__dirname,'js/lib/jquery-1.11.3.min.js'),
			mod: path.join(__dirname,'js/mod'),
			less: path.join(__dirname,'less')
		}
	}
}
