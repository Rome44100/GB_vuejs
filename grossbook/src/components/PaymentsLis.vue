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
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    },
    onePageNums: {
      type: Number
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
    width: 100%;
}
table td {
    border-bottom: solid 1px #ccc;
    padding: 10px 30px;
}
</style>
