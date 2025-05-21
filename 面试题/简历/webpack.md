# webpack

## 插件怎么写
```js
class uniMpLoadPkgPlugin {
    apply (compiler) {

    }
}
```

## 有哪些优化方式

1. 利用 speed-measure-webpack-plugin 分析各个loader的耗时，针对耗时较长的loader通过thread-loader放到单独的进程中处理
2. 指定loader中的include、exclude字段，申明需要包含的和排除的路径
3. 使用cache-loader缓存资源（webpack5中直接设置 cache: { type: 'filesystem' }）
5. 对html、css、js、图片进行压缩
6. 使用代码分割，splitChunks: { chunks: 'all' }
4. 或者使用DllPlugin、DllReferencePlugin对不常变更的库进行预编译

## Loader 和 Plugin的区别

Loader负责把非js的资源转换成js模块，路径处理、样式处理

Plugin负责把js做更细致的处理，压缩代码、tree shaking等

## 打包的流程

1. 根据配置文件获取配置（入口文件、输出路径、loader、plugin），创建编译实例
2. 通过loader进行模块的解析，将资源进行转换成js能识别的模块，并生成AST依赖树
3. 通过plugin对模块里的代码进行优化处理（tree shaking、压缩）
4. 根据输出路径，生成最终bundle产物

