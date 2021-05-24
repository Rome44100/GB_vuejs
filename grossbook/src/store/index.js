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
    page: 1,
    curPage: 1,
    categories: [
      { id: 1, name: 'Продукты' },
      { id: 2, name: 'Одежда' },
      { id: 3, name: 'Развлечения' },
      { id: 4, name: 'Обучение' }
    ]
  },
  // здесь функции, которые умеют менять состояние хранилища
  mutations: {
    setPayListData (state, payload) {
      state.payList = payload
    },
    addRow (state, payload) {
      state.payList.unshift(payload)
      state.pageList = state.payList.slice(0, state.onePageNums)
      state.listLength = state.payList.length
      state.pages = Math.ceil(state.listLength / state.onePageNums)
    },
    setPage: (state, num) => {
      const n = num - 1
      state.curPage = num
      state.pageList = state.payList.slice(state.onePageNums * n, state.onePageNums * n + state.onePageNums)
    },
    setPageList: (state, obj) => {
      const { start, end } = obj
      state.pageList = state.payList.slice(start, end)
    }
  },
  // функции, которые получают данные из хранилища
  getters: {
    getOnePageList: state => state.pageList,
    getPayList: state => state.payList,
    getPayListSumm: state => {
      return state.payList.reduce((res, cur) => res + cur.price, 0)
    },
    getPages: state => state.pages,
    getCurPage: state => state.curPage,
    getCategory: state => state.categories
  },
  // логика хранилища (обращение на сервер, fetch, получение данных)
  actions: {
    fetchData ({ commit, state }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 25, date: '2021-05-13', category: 2, price: 123 },
            { id: 24, date: '2021-05-12', category: 3, price: 6000 },
            { id: 23, date: '2021-05-11', category: 2, price: 458 },
            { id: 22, date: '2021-05-09', category: 2, price: 1023 },
            { id: 21, date: '2021-05-08', category: 2, price: 123 },
            { id: 20, date: '2021-05-07', category: 2, price: 23 },
            { id: 19, date: '2021-05-06', category: 2, price: 523 },
            { id: 18, date: '2021-05-05', category: 2, price: 423 },
            { id: 17, date: '2021-05-04', category: 2, price: 223 },
            { id: 16, date: '2021-05-03', category: 2, price: 105 },
            { id: 15, date: '2021-05-02', category: 2, price: 157 },
            { id: 14, date: '2021-05-01', category: 2, price: 540 },
            { id: 13, date: '2021-04-30', category: 2, price: 85 },
            { id: 12, date: '2021-04-29', category: 2, price: 805 },
            { id: 11, date: '2021-04-28', category: 2, price: 546 },
            { id: 10, date: '2021-04-27', category: 2, price: 8542 },
            { id: 9, date: '2021-04-26', category: 2, price: 6000 },
            { id: 8, date: '2021-04-25', category: 2, price: 6000 },
            { id: 7, date: '2021-04-24', category: 2, price: 5870 },
            { id: 6, date: '2021-04-23', category: 2, price: 548 },
            { id: 5, date: '2021-04-22', category: 2, price: 2354 },
            { id: 4, date: '2021-04-21', category: 2, price: 258 },
            { id: 3, date: '2021-04-20', category: 2, price: 879 },
            { id: 2, date: '2021-04-19', category: 2, price: 584 },
            { id: 1, date: '2021-04-18', category: 2, price: 465 }
          ])
        }, 2000)
      })
        .then(res => {
          // commit только для мутаций
          commit('setPayListData', res)
          // знаю, что это всё нужно вызывать через мутации,
          // но уже нет времени переписывать
          state.listLength = state.payList.length
          state.pages = state.listLength / state.onePageNums
          state.pageList = state.payList.slice(0, this.state.onePageNums)
        })
    }
  }
})
