<template>
  <div class="hello">
    <input v-model.number="operand1">
    <input v-model.number="operand2">
    = {{ result }}
    <br>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Отобразить экранную клавиатуру{{ checked }}</label>
    <div>
      <button @click="calculate" id="sum">+</button>
      <button @click="calculate" id="sub">-</button>
      <button @click="calculate" id="div">/</button>
      <button @click="calculate" id="mul">*</button>
      <button @click="calculate" id="exp">**</button>
      <button @click="calculate" id="tof">F</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0
  }),
  props: {
  },
  methods: {
    calculate ($event) {
      switch ($event.target.id) {
        case 'sum':
          this.result = this.operand1 + this.operand2
          break
        case 'sub':
          this.result = this.operand1 - this.operand2
          break
        case 'div':
          this.result = this.operand1 / this.operand2
          break
        case 'mul':
          this.result = this.operand1 * this.operand2
          break
        case 'exp':
          this.result = Math.pow(this.operand1, this.operand2)
          break
        case 'tof':
          this.result = (this.operand1 / this.operand2).toFixed()
          break
        default:
          break
      }
    },
    calc2 (op) {
      const { operand1, operand2 } = this
      const operation = {
        sum: () => operand1 + operand2,
        sub: () => operand1 - operand2
      }
      this.result = operation[op]()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello div {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0 0;
}
</style>
