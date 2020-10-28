import Vue from 'vue'
import App from './App'
import store from './store'
import i18n from './language'
import Filters from './filters'
import Plugins from './plugins'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
// import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import './mixins'

Vue.use(Filters);
Vue.use(Plugins);

Vue.component('mescroll-body', MescrollBody);
// Vue.component('mescroll-uni', MescrollUni);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    i18n,
    store,
    ...App
});
app.$mount();
