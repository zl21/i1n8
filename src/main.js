// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ArkUi from '@syman/ark-ui'
import less from 'less'
import '@syman/ark-ui/dist/styles/ark-ui.css'
import '@syman/ark-ui/dist/styles/bjIconfonts/iconfont.css';
import './assets/reset.css'

Vue.use(less);
Vue.use(ArkUi);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
