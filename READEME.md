# Multiple entry points webpack build

> Inspired by vue-cli

## Expect Result

1. External JS

  `home.html`: home.js, vendor.js(Bootstrap (v4.0.0-alpha.6) modal, jQuery JavaScript Library v3.2.1), manifest.js

  `about.html`: about.js

2. External CSS

  `home.html`: common.css, home.css

  `about.html`: common.css, about.css

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

每个 index.js 文件头部都有如下代码，使用情景见注释：

```js
if (process.env.NODE_ENV === 'development') {
// 1.只修改模板文件时开启，并注释掉（2）部分的代码，实现【hard refresh】
// require('./index.pug')

// 2.只修改js文件时开启，并注释掉（1）部分的代码，实现【HMR】
// if (module.hot) module.hot.accept()
}
```

如果不这样做，每次修改js文件就会刷新整个页面，而修改pug文件又没有自动刷新页面。

通过 console 看到 webpack-dev-server 的 log：

<img src="/accept-HMR.png" alt="Rebase feature onto master">

原因：虽然 _devServer.hot_ 开启了 webpack 的 Hot Module Replacement 功能，但 HMR 是一个 opt-in 功能，[只影响包含了HMR code的模块](https://webpack.js.org/concepts/hot-module-replacement/#in-a-module)。

style-loader 实现了 HMR 的接口，所以修改 .css/.scss 文件可热替换而无刷新。

因此需要对 .js 文件（每个文件是一个 module）添加上述代码才能实现热替换无刷新。

vue-loader/lib/loader.js 中已写了上述代码。
