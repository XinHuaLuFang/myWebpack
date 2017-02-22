# 入口点 / Entry Point

### 单个入口点语法
```
const config = {
    entry: {
        main: './entry.js'
    }
}
module.exports = config;
```
简写：
```
const config = {
    entry: './entry.js'
}
module.exports = config;
```

### 对象语法
```
const config = {
    entry: {
        app: './app.js',
        test: './test.js'
    }
};
module.exports = config;
```