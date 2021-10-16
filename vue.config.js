module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rb_shop/'
    : '/'
}
