import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isCollapse: false,
        userinfor: ''

    },
    mutations: {
        //改变后台折叠侧栏的状态
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {

    }
})