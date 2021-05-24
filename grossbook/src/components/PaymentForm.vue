<template>
  <div>
    <div>
      <input type="date" placeholder="Дата" v-model="date">
    </div>
    <div>
      <input placeholder="Категория" v-model="category">
      <br>
      <!-- <select @change="getCatId($event)">
        <option :value="0">-----</option>
        <option v-for="(item, index) in getCategory" :key="index" :value="item.id">{{ item.name }}</option>
      </select> -->
    </div>
    <div>
      <input type="number" placeholder="Трата" v-model.number="price">
    </div>
    <div>
      <button @click="save">Добавить!</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      date: '',
      category: '',
      price: 1,
      n: Number
    }
  },
  computed: {
    ...mapGetters([
      'getPayList',
      'getCategory'
    ])
  },
  methods: {
    ...mapMutations([
      'addRow'
    ]),
    getCatId ($event) {
      this.category = $event.target.value
    },
    save () {
      const { date, category, price } = this
      const id = this.getPayList[0].id + 1
      this.addRow({ id, date, category, price })
    }
  }
}
</script>

<style>

</style>
