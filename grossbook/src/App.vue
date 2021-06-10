<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn :ripple="false" plain to="/dashboard">Dashboard</v-btn>
      <v-btn :ripple="false" plain to="/about">About</v-btn>
      <v-btn :ripple="false" plain to="/404">404</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <h1>Мои финансы</h1>
      </v-container>
      <v-row>
        <v-col>
          <v-container>
            <p>Быстрые ссылки для добавления расходов:</p>
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
          </v-container>
          <v-container>
            <PaymentForm />
          </v-container>
          <v-container>
            <PaymentsList />
            <!--<Pagination :onePageNums="onePageNums" :pages="pages" :page="page" @setNumList="setPage" />-->
            <!-- <Pagination /> -->
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <h2>Диаграмма</h2>
            <!-- <Diagramm /> -->
            <SyncfusionChart />
          </v-container>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
// import Pagination from './components/Pagination'
// import Diagramm from './components/Diagramm'
import SyncfusionChart from './components/SyncfusionChart'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    // Pagination,
    SyncfusionChart
    // Diagramm
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
  }
}
</script>

<style>
</style>
