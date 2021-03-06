// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
		sitEnv: require('./sit.env'),
    prodEnv: require('./prod.env'),
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist/'),
    index: path.resolve(__dirname, '../dist/m/index.html'),
    // assetsSubDirectory: 'm/static',
    // assetsPublicPath: '../',
    assetsSubDirectory: 'm/static',
    assetsPublicPath: '/',
    // index: path.resolve(__dirname, '../dist/test/index.html'),
    // assetsSubDirectory: 'test/static',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8000,
    assetsSubDirectory: 'm/static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
				target: "http://a.kofuf.com:8000",
				pathRewrite: {
					'^/api': '/api',
				},
				changeOrigin: true
			}
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (http://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
