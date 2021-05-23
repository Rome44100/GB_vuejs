import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state - само хранилище
  state: {
    payList: [],
    onePageNums: 5,
    pageList: [],
    listLength: 0,
    pages: 0,
    page: 1
  },
  // здесь функции, которые умеют менять состояние хранилища
  mutations: {
    setPayListData (state, payload) {
      state.payList = payload
    },
    addRow (state, payload) {
      state.payList.unshift(payload)
    },
    getPageList (state, obj) {
      const { start, end } = obj
      state.pageList = state.payList.slice(start, end)
    },
    setPage (state, num) {
      const n = num - 1
      state.getPageList(state.onePageNums * n, state.onePageNums * n + state.onePageNums)
    }
  },
  // функции, которые получают данные из хранилища
  getters: {
    getOnePageList: state => state.pageList,
    getPayList: state => state.payList,
    getPayListSumm: state => {
      return state.payList.reduce((res, cur) => res + cur.price, 0)
    },
    getLastId: state => {
      return state.payList[0].id
    }
  },
  // логика хранилища (обращение на сервер, fetch, получение данных)
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 25, date: '2021-05-13', category: 'education', price: 123 },
            { id: 24, date: '2021-05-12', category: 'education', price: 6000 },
            { id: 23, date: '2021-05-11', category: 'education', price: 458 },
            { id: 22, date: '2021-05-09', category: 'education', price: 1023 },
            { id: 21, date: '2021-05-08', category: 'education', price: 123 },
            { id: 20, date: '2021-05-07', category: 'education', price: 23 },
            { id: 19, date: '2021-05-06', category: 'education', price: 523 },
            { id: 18, date: '2021-05-05', category: 'education', price: 423 },
            { id: 17, date: '2021-05-04', category: 'education', price: 223 },
            { id: 16, date: '2021-05-03', category: 'education', price: 105 },
            { id: 15, date: '2021-05-02', category: 'education', price: 157 },
            { id: 14, date: '2021-05-01', category: 'education', price: 540 },
            { id: 13, date: '2021-04-30', category: 'education', price: 85 },
            { id: 12, date: '2021-04-29', category: 'education', price: 805 },
            { id: 11, date: '2021-04-28', category: 'education', price: 546 },
            { id: 10, date: '2021-04-27', category: 'education', price: 8542 },
            { id: 9, date: '2021-04-26', category: 'education', price: 6000 },
            { id: 8, date: '2021-04-25', category: 'education', price: 6000 },
            { id: 7, date: '2021-04-24', category: 'education', price: 5870 },
            { id: 6, date: '2021-04-23', category: 'education', price: 548 },
            { id: 5, date: '2021-04-22', category: 'education', price: 2354 },
            { id: 4, date: '2021-04-21', category: 'education', price: 258 },
            { id: 3, date: '2021-04-20', category: 'education', price: 879 },
            { id: 2, date: '2021-04-19', category: 'education', price: 584 },
            { id: 1, date: '2021-04-18', category: 'education', price: 465 }
          ])
        }, 2000)
      })
        .then(res => {
          commit('setPayListData', res)
        })
        .then(() => {
          this.state.listLength = this.state.payList.length
          this.state.pages = this.state.listLength / this.state.onePageNums
          // commit только для мутаций
          commit('getPageList', { start: '0', end: this.state.onePageNums })
        })
    }
  }
})
