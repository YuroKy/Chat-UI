import Vue from 'vue';
import App from './App.vue';
import VueSignalR from '@latelier/vue-signalr/src/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSignalR, 'http://192.168.31.112:5005/chat-hub');

new Vue({
  render: h => h(App),
  created() {
    this.$socket.start({
      log: false // Active only in development for debugging.
    });
  },
}).$mount('#app')
