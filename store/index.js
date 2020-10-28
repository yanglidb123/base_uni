import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: uni.getStorageSync('token') || '这是token',
        countNumber: 0,
    },
    mutations: {
        ['SET_TOKEN'](state, data) {
            state.token = data;
            uni.setStorageSync('token', data);
        },
        ['COUNT_NUMBER_ADD'](state) {
            state.countNumber++;
        },
    }
})
