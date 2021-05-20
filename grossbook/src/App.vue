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
          <PaymentsLis :items="pageList"  />
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
import PaymentsLis from './components/PaymentsLis'
import PaymentForm from './components/PaymentForm'
import Pagination from './components/Pagination'

export default {
  name: 'App',
  components: {
    PaymentsLis,
    PaymentForm,
    Pagination
  },
  data () {
    return {
      flag: false,
      onePageNums: 5,
      pageList: [],
      payList: [
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
      ],
      listLength: 0,
      pages: 0,
      page: 1
    }
  },
  methods: {
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
