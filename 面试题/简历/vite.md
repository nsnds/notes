# vite

## 插件怎么写

```js
export uniMpLoadPkgPlugin () {
    return {
        name: 'uniMpLoadPkgPlugin',
        generateBundle (_, bundle) {
            // 修改bundle
            // bundle.fileUrl
            // bundle.fileUrl.code
            // bundle.fileUrl.source
        }
    }

}
```

## 有哪些优化方式

