// common style
import '@/assets/scss/main.scss'
// current page style
import './index.scss'

import { initMap, addMapScript } from './_contactUs.js'

if (process.env.NODE_ENV === 'development') {
require('./index.pug')
require('./_about.pug')
require('./_ai.pug')
require('./_contactUs.pug')
require('./_culture.pug')
require('./_joinUs.pug')
require('./_partner.pug')
require('./_product.pug')

// Opt-in to Webpack hot module replacement
// if (module.hot) module.hot.accept()
}

// 使用jsonp异步加载地图需要在全局作用域定义callback
window.initMap = initMap

$(function() {
  // Handler for .ready() called.
  // 添加script标签，引入高德地图
  addMapScript();
});
