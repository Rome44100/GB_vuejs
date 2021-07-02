<template>
  <div>
      <table>
          <tr>
            <th>#</th>
            <th>Дата</th>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
          <tr v-for="(item, index) in getOnePageList" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.date }}</td>
              <!-- <td>{{ getCategory[item.category - 1].name }}</td> -->
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
          </tr>
      </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    onePageNums: {
      type: Number
    }
  },
  computed: {
    ...mapGetters([
      'getCategory',
      'getOnePageList'
    ])
  },
  methods: {
    findCat (id) {
      return this.getCategory.find(el => el.id === id)
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
