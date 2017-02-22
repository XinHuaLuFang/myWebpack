# 加载器 / Loaders
1. 安装相应的加载器
```
npm install --save-dev css-loader
npm install --save-dev ts-loader
```
2. 在配置文件中添加配置
```
module.exports = {
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
            {test: /\.ts$/, use: 'ts-loader'}
        ]
    }
};
```
以下写法定义相同的加载器
```
    {test: /\.css$/, loader: 'css-loader'}
    
    {test: /\.css$/, use: 'css-loader'}
    
    {test: /\.css$/, use: {
        loader: 'css-loader',
        options: {}
    }}
```
### 使用加载器的三种方式
1. 配置文件
```
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    }
```
2. require
```
    require('style-loader!css-loader?modules!./styles.css');
```
3. CLI
```
    webpack --module-bind jade --module-bind 'css-style!css'
```