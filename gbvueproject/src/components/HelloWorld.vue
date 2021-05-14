<template>
  <div class="hello">
    <input v-model.number="operand1">
    <input v-model.number="operand2">
    <div>
    Result = {{ result }}
    </div>
    <div>
      <button v-for="op in operations" @click="calculate(op)" :key="op">{{ op }}</button>
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div>
      <label>
        Отобразить экранную клавиатуру
        <input type="checkbox" id="checkbox" v-model="checked">
      </label>
    </div>
    <div>
      <div v-if="checked">
        <div>
          <button v-for="item in numbers" :key="item" @click="setOpVal(item)">{{ item }}</button>
          <button @click="delSymbol">←</button>
        </div>
        <div>
          <label for="one">
            <input type="radio" id="one" value="choose_one" v-model="picked">
            Operand 1
          </label>
          <label for="two">
            <input type="radio" id="two" value="choose_two" v-model="picked">
            Operand 2
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    checked: false,
    picked: 'choose_one',
    error: '',
    operations: ['sum', 'sub', 'div', 'mul', 'exp', 'tof'],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }),
  props: {
  },
  methods: {
    calculate (op) {
      this.operand1 = Number(this.operand1)
      this.operand2 = Number(this.operand2)
      this.error = ''
      switch (op) {
        case 'sum':
          this.result = this.operand1 + this.operand2
          break
        case 'sub':
          this.result = this.operand1 - this.operand2
          break
        case 'div':
          if (this.operand2 === 0) {
            this.error = 'Деление на ноль!'
          } else {
            this.result = this.operand1 / this.operand2
          }
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
    },
    setOpVal (val) {
      val = String(val)
      if (this.picked === 'choose_one') {
        this.operand1 = this.operand1 === 0 ? '' : this.operand1
        this.operand1 += val
      }
      if (this.picked === 'choose_two') {
        this.operand2 = this.operand2 === 0 ? '' : this.operand2
        this.operand2 += val
      }
    },
    delSymbol () {
      this.operand1 = String(this.operand1)
      this.operand2 = String(this.operand2)
      if (this.picked === 'choose_one') {
        this.operand1 = this.operand1.substring(0, this.operand1.length - 1)
      }
      if (this.picked === 'choose_two') {
        this.operand2 = this.operand2.substring(0, this.operand2.length - 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
div {
  display: block;
  margin: 10px 0;
}
button {
  margin-right: 10px;
}
.error {
  padding: 20px;
  border: solid 1px red;
}
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
