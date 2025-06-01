module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/festhoche3/' : '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hot: true,
    historyApiFallback: true
  }
}
