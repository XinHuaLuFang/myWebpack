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