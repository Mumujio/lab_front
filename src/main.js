import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import dataV from '@jiaminghi/data-view'
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(ElementUI);
Vue.use(dataV);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')