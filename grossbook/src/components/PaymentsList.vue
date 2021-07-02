<template>
  <!-- <div>
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
              <td>{{ item.category }}</td>
              <td>{{ item.price }}</td>
              <td><Popup :id="item.id" /></td>
          </tr>
      </table>
  </div> -->
  <v-data-table
    :headers="headers"
    :items="getPayList"
  >
  <!-- <template v-slot:top>
    <v-toolbar
        flat
      >
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
      </v-dialog>
    </v-toolbar>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
    </template> -->
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'

// import Popup from '../components/popup'

export default {
  data () {
    return {
      headers: [
        { text: '#', value: 'id' },
        { text: 'Дата', value: 'date' },
        { text: 'Категория', value: 'category' },
        { text: 'Расход', value: 'price' }
      ]
    }
  },
  components: {
    // Popup
  },
  props: {
    onePageNums: {
      type: Number
    }
  },
  computed: {
    ...mapGetters([
      'getCategory',
      'getOnePageList',
      'getPayList'
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
    padding: 10px 22px;
}
</style>
