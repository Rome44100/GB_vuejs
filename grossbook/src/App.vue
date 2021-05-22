<template>
  <div id="app">
    <div :class="[$style.body_wrap]">
      <header>
        <h1>Мои финансы</h1>
      </header>
      <main>
        <div :class="[$style.columns]">
          <button :class="[$style.add_btn]" @click="toggleAddForm">Добавить расходы +</button>
          <div v-show="flag" :class="[$style.toggle_form]">
            <PaymentForm @PushDataForm="addRow" />
          </div>
          <PaymentsList />
          <Pagination :onePageNums="onePageNums" :pages="pages" :page="page" @setNumList="setPage" />
        </div>
        <div :class="[$style.columns]">
          <h3>Диаграммы</h3>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import Pagination from './components/Pagination'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    Pagination
  },
  data () {
    return {
      flag: false,
      onePageNums: 5,
      pageList: [],
      listLength: 0,
      pages: 0,
      page: 1
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    toggleAddForm () {
      this.flag = !this.flag
    },
    addRow (data) {
      this.payList.unshift(data)
      this.listLength = this.payList.length
      this.pages = this.listLength / this.onePageNums
      this.getPageList(0, this.onePageNums)
    },
    getPageList (start, end) {
      this.pageList = this.payList.slice(start, end)
    },
    setPage (data) {
      const n = data - 1
      this.getPageList(this.onePageNums * n, this.onePageNums * n + this.onePageNums)
    }
  },
  mounted () {
    this.fetchData()
    this.listLength = this.payList.length
    this.pages = this.listLength / this.onePageNums
    this.getPageList(0, this.onePageNums)
  }
}
</script>

<style lang="scss" module>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #000;
}
.body_wrap {
  padding: 40px;
}
main {
  display: flex;
  gap: 20px;
}
.columns {
  border: solid 1px #ccc;
  width: 40vw;
  min-height: 10vh;
  padding: 10px;
  position: relative;
}
.add_btn {
  background-color: #25a79a;
  color: #fff;
  border: none;
  padding: 6px 20px;
  margin-bottom: 20px;
  font-weight: 600;
  cursor: pointer;
}
.toggle_form {
  position: absolute;
  border: solid 1px #ccc;
  box-shadow: 2px 2px 3px #ccc;
  padding: 30px;
  background-color: #fff;
  width: 20vw;
  top: 40px;
}
.toggle_form input {
  display: inline-block;
  margin: 10px 0;
  width: 100%;
}
</style>
