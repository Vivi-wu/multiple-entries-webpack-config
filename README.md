# Multiple entry points webpack build

> Inspired by vue-cli

Webpack 4, Bootstrap 4, jQuery 3, Babel, Sass, Pug.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Run

Auto open the build pages under /dist folder with a default browser.

``` bash
# install Browsersync
npm install -g browser-sync

# run a Local server and specify the index page
browser-sync start --server --index 'index.html'
```

## Tips for Development

1. 在每个 index.js 文件开始处插入以下代码。

```js
if (process.env.NODE_ENV === 'development') {
// 1.只修改模板文件时开启，并注释掉（2）部分的代码，实现【hard refresh】
// require('./index.pug')

// 2.只修改js文件时开启，并注释掉（1）部分的代码，实现【HMR】
// if (module.hot) module.hot.accept()
}
```

这样做的原因是：每次修改js文件会刷新整个页面，而修改pug文件没有自动刷新页面。

通过 console 看到 webpack-dev-server 的 log：

<img src="/accept-HMR.png" alt="Rebase feature onto master">

虽然 _devServer.hot_ 开启了 webpack 的 Hot Module Replacement 功能，但 HMR 是一个 opt-in 功能，[只影响包含了HMR code的模块](https://webpack.js.org/concepts/hot-module-replacement/#in-a-module)。

style-loader 实现了 HMR 的接口，所以修改 .css/.scss 文件可热替换而无刷新。

因此需要对 .js 文件（每个文件是一个 module）添加上述代码才能实现热替换无刷新。

为什么 Vue CLI 项目不需要写？vue-loader/lib/loader.js 中已包含上述代码。

2. 让 Webpack 管理图片等静态资源路径。

配置 resolve alias 是 'images'，指向 src/assets/img/ 目录。使用方法如下：

.pug 文件

```html
img(src=require('images/company_logo.png') width='346' height='20' alt='company logo')
```
.scss 文件

```css
background-image: url('~images/innovation/banner_bg.png');
```
