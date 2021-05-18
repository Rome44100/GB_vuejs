<template>
  <div>
    <input placeholder="Дата" v-model="date">
    <input placeholder="Категория" v-model="category">
    <input placeholder="Трата" v-model.number="price">
    <button @click="save">Добавить!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0
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
