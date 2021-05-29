<template>
  <div id="app">
    <div :class="[$style.body_wrap]">
      <header>
        <h1>Мои финансы</h1>
      </header>
      <main>
        <div :class="[$style.columns]">
          <ul>
            <li>
              <router-link to="/add/payment/Food?value=200">Еда = 200</router-link>
            </li>
            <li>
              <router-link to="/add/payment/Transport?value=50">Транспорт = 50</router-link>
            </li>
            <li>
              <router-link to="/add/payment/Entertainment?value=2000">Развлечения = 2000</router-link>
            </li>
          </ul>
          <br>
          <div>
            <PaymentForm />
          </div>
          <PaymentsList />
          <!--<Pagination :onePageNums="onePageNums" :pages="pages" :page="page" @setNumList="setPage" />-->
          <Pagination />
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

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    Pagination
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  computed: {
    ...mapGetters([
      'getPayList'
    ])
  },
  mounted () {
    this.fetchData()
    // console.log(this.$modal)
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
</style>
