<template>
  <div id="app">
    <div :class="[$style.body_wrap]">
      <header>
        <h1>Мои финансы</h1>
      </header>
      <main>
        <div :class="[$style.columns]">
          <PaymentForm />
          <PaymentsLis />
        </div>
        <div :class="[$style.columns]">
          <h2>Диаграммы</h2>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsLis from './components/PaymentsLis.vue'
import PaymentForm from './components/PaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsLis,
    PaymentForm
  },
  data () {
    return {
      payList: [
        {
          date: '13.05.2021',
          category: 'education',
          price: 123
        },
        {
          date: '12.05.2021',
          category: 'education',
          price: 6000
        },
        {
          date: '11.05.2021',
          category: 'education',
          price: 458
        },
        {
          date: '10.05.2021',
          category: 'education',
          price: 1023
        }
      ]
    }
  },
  methods: {
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
}
.columns {
  border: solid 1px #ccc;
  width: 40vw;
  min-height: 10vh;
  padding: 10px;
}
</style>
