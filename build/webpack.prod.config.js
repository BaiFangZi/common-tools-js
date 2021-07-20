const path = require('path')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
let BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../', 'libs/index.js'),
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'index.js',
    library: 'vue-manage-component',
    libraryTarget: 'umd', //兼容使用时的导入方式，import script标签等
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, //匹配js文件
        exclude: /node_modules/, //排除node_modules中的文件，不进行操作
        loader: 'babel-loader', //依赖
        options: {
          //配置项
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage', //按需加载
                corejs: {
                  version: 3, //core.js的版本
                },
                targets: {
                  chrome: '60', //兼容chrome到60版本
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17',
                },
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
}
