<template>
  <div :class="[$style.pagination]">
    <ul>
      <li v-for="(n, index) in getPages" :key="index">
        <a v-if="n == getCurPage" :class="[$style.active]" href="#1" @click="setPage(n)">{{ n }}</a>
        <a v-else href="#1" @click="setPage(n)">{{ n }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      n: 1
    }
  },
  methods: {
    ...mapMutations([
      'setPage'
    ])
  },
  computed: {
    ...mapGetters([
      'getPages',
      'getCurPage'
    ])
  }
}
</script>

<style module>
.pagination {
    border: solid 1px #ccc;
}
.pagination ul {
    display: flex;
    justify-content: center;
    padding: 16px 0;
    gap: 14px;
}
.pagination li {
  list-style: none;
}
.pagination a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
}
.pagination a.active {
    color: rgb(43, 82, 255);
    cursor: default;
}
</style>
