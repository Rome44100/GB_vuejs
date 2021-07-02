<template>
  <div>
    <button :class="[$style.add_btn]" @click="toggleAddForm" id="show_expense_form">Добавить расходы +</button>
    {{ setPrepValues }}
    <div v-show="flag" :class="[$style.toggle_form]">
      <div>
        <input type="date" placeholder="Дата" v-model="date" name="date">
      </div>
      <div>
        <input placeholder="Категория" v-model="category" name="category">
        <br>
        <!-- <select @change="getCatId($event)">
          <option :value="0">-----</option>
          <option v-for="(item, index) in getCategory" :key="index" :value="item.id">{{ item.name }}</option>
        </select> -->
      </div>
      <div>
        <input type="number" placeholder="Трата" v-model.number="price" name="expense">
      </div>
      <div>
        <button @click="save" id="add_expense">Добавить!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  // props: { openForm: Boolean },
  data () {
    return {
      date: '',
      category: '',
      price: 1,
      n: Number,
      flag: false
    }
  },
  computed: {
    ...mapGetters([
      'getPayList',
      'getCategory'
    ]),
    setPrepValues () {
      this.setRowFromUrl()
      return ''
    }
  },
  methods: {
    toggleAddForm () {
      this.flag = !this.flag
    },
    ...mapMutations([
      'addRow'
    ]),
    getCatId ($event) {
      this.category = $event.target.value
    },
    save () {
      this.flag = false
      const { date, category, price } = this
      const id = this.getPayList[0] === undefined ? Math.ceil(Math.random() * 10000) : this.getPayList[0].id + 1
      this.addRow({ id, date, category, price })
    },
    setRowFromUrl () {
      if (this.$route.path.indexOf('/add/payment/') !== -1) {
        // console.log(this.$route)
        const date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        const year = date.getFullYear()
        let fullDate = ''
        const expense = this.$route.query.value ? this.$route.query.value : ''
        const category = this.$route.params.category ? this.$route.params.category : ''

        // лидирующие нули
        if (day < 10) day = '0' + day
        if (month < 10) month = '0' + month

        // полная дата
        fullDate = year + '-' + month + '-' + day

        // автоматическое добавление
        if (expense !== '' && category !== '') {
          this.date = fullDate
          this.category = category
          this.price = expense
          this.save()
          this.$router.push('/')
        }

        // открытие формы с подставленными данными
        if (expense === '' || category === '') {
          this.flag = true
          this.date = fullDate
          this.category = category
          this.price = expense
        }
      }
    }
  }
}
</script>

<style module>
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
