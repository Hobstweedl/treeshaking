import Vue from 'vue'
import BaseApp from './BaseApp.vue'
import vuetify from './vuetify';

new Vue({
  el: '#app',
  vuetify,
  render: h => h(BaseApp)
})
