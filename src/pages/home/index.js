import $ from 'jquery'
import { initMap, addMapScript } from './_contactUs.js'
// common style
import '@/assets/scss/main.scss'
// current page style
import './index.scss'

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

// 异步加载
// https://lbs.amap.com/api/javascript-api/guide/function/loading
window.initMap = initMap

$(function() {
  // Handler for .ready() called.
  // 添加script标签，引入高德地图
  addMapScript();
});
