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
              <router-link to="/add/payment/Food?value=200" v-slot="{ href }" custom>
                <a :href="href" @click="setDefaultPay">Еда = 200</a>
              </router-link>
            </li>
            <li>
              <router-link to="/add/payment/Transport?value=50">Транспорт = 50</router-link>
            </li>
            <li>
              <router-link to="/add/payment/Entertainment?value=2000" @click="setDefaultPay">Развлечения = 2000</router-link>
            </li>
          </ul>
          <br>
          <div>
            <button :class="[$style.add_btn]" @click="toggleAddForm">Добавить расходы +</button>
            <div v-show="flag" :class="[$style.toggle_form]">
              <PaymentForm />
            </div>
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
  data () {
    return {
      flag: false
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    toggleAddForm () {
      this.flag = !this.flag
    },
    setDefaultPay ($event) {
      console.log(this.$route)
      $event.preventDefault()
    }
  },
  computed: {
    ...mapGetters([
      'getPayList'
    ])
  },
  mounted () {
    this.fetchData()
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
  top: 154px;
}
.toggle_form input {
  display: inline-block;
  margin: 10px 0;
  width: 100%;
}
</style>
