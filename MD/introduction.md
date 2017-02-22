# myWebpack


### 入口 / Entry
```
// webpack.config.js
module.exports = {
    entry: './path/entry.js'
};
```

### 输出 / Output
```
// webpack.config.js
const path = require('path');
module.exports = {
    entry: './path/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
```

### 加载器 / Loaders
加载器将所有文件转换为模块，在配置中主要有两个目的：
1. 标识哪种文件应该被特定的加载器转换（test）；
2. 转换该文件，以便它可以添加到依赖关系图中。
```
// webpack.config.js
const path = require('path');
module.exports = {
    entry: './path/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    }
}
```

### 插件 / Plugins
```
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: './path/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './index.html'});
    ]
}
```