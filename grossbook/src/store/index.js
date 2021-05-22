import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state - само хранилище
  state: {
    payList: []
  },
  // здесь функции, которые умеют менять состояние хранилища
  mutations: {
    setPayListData (state, payload) {
      state.payList = payload
    }
  },
  // функции, которые получают данные из хранилища
  getters: {
    getPayList: state => state.payList,
    getPayListSumm: state => {
      return state.payList.reduce((res, cur) => res + cur.price, 0)
    }
  },
  // логика хранилища (обращение на сервер, fetch, получение данных)
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { date: '2021-05-13', category: 'education', price: 123 },
            { date: '2021-05-12', category: 'education', price: 6000 },
            { date: '2021-05-11', category: 'education', price: 458 },
            { date: '2021-05-09', category: 'education', price: 1023 },
            { date: '2021-05-08', category: 'education', price: 123 },
            { date: '2021-05-07', category: 'education', price: 23 },
            { date: '2021-05-06', category: 'education', price: 523 },
            { date: '2021-05-05', category: 'education', price: 423 },
            { date: '2021-05-04', category: 'education', price: 223 },
            { date: '2021-05-03', category: 'education', price: 105 },
            { date: '2021-05-02', category: 'education', price: 157 },
            { date: '2021-05-01', category: 'education', price: 540 },
            { date: '2021-04-30', category: 'education', price: 85 },
            { date: '2021-04-29', category: 'education', price: 805 },
            { date: '2021-04-28', category: 'education', price: 546 },
            { date: '2021-04-27', category: 'education', price: 8542 },
            { date: '2021-04-26', category: 'education', price: 6000 },
            { date: '2021-04-25', category: 'education', price: 6000 },
            { date: '2021-04-24', category: 'education', price: 5870 },
            { date: '2021-04-23', category: 'education', price: 548 },
            { date: '2021-04-22', category: 'education', price: 2354 },
            { date: '2021-04-21', category: 'education', price: 258 },
            { date: '2021-04-20', category: 'education', price: 879 },
            { date: '2021-04-19', category: 'education', price: 584 },
            { date: '2021-04-18', category: 'education', price: 465 }
          ])
        }, 2000)
      })
        .then(res => {
          commit('setPayListData', res)
        })
    }
  }
})
