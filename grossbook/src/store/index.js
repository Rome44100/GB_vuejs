import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state - само хранилище
    state: {},
    // здесь функции, которые умеют менять состояние хранилища
    mutations: {},
    // функции, которые получают данные из хранилища
    getters: {},
    // логика хранилища (обращение на сервер, fetch, получение данных)
    actions: {}
})