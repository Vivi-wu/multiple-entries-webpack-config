import '@/assets/scss/main.scss'
// current page style
import './index.scss'
if (process.env.NODE_ENV === 'development') {
require('./index.pug')

// Opt-in to Webpack hot module replacement
// if (module.hot) module.hot.accept()
}
