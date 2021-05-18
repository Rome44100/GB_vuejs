<template>
  <div>
      <table>
          <tr>
            <th>#</th>
            <th>Дата</th>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
          <tr v-for="(item, index) in items" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
          </tr>
      </table>
      <div>
          <a href="#1">1</a>
          <a href="#1">2</a>
          <a href="#1">3</a>
          <a href="#1">4</a>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    doSome () {
      console.log(this.items)
    }
  }
}
</script>

<style module>
table {
    border-collapse: collapse;
}
table td {
    border-bottom: solid 1px #ccc;
    padding: 10px 30px;
}
</style>
