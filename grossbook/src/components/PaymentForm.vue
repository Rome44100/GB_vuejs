<template>
  <div>
    <div>
      <input type="date" placeholder="Дата" v-model="date">
    </div>
    <div>
      <input placeholder="Категория" v-model="category">
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
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 1
    }
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('PushDataForm', { date, category, price })
    }
  }
}
</script>

<style>

</style>
