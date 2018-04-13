import '@/assets/scss/main.scss'
if (process.env.NODE_ENV === 'development') {
require('./index.pug')

// Opt-in to Webpack hot module replacement
// if (module.hot) module.hot.accept()
}

console.info('Hi from Product page.')