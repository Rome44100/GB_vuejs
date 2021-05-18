<template>
  <div id="app">
    <div :class="[$style.body_wrap]">
      <header>
        <h1>Мои финансы</h1>
      </header>
      <main>
        <div :class="[$style.columns]">
          <PaymentForm @PushDataForm="addRow" />
          <PaymentsLis :items="payList" />
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
    addRow (data) {
      this.payList.push(data)
    }
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
}
</style>
