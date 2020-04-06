const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8999
  },
  configureWebpack: {
    name: 'hello-vue',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
