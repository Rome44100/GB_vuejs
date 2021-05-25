<template>
  <div :class="[$style.pagination]">
    <ul>
      <li v-for="(n, index) in getPages" :key="index">
        <span v-if="n == getCurPage" :class="[$style.active]" @click="setPage(n)">{{ n }}</span>
        <span v-else @click="setPage(n)">{{ n }}</span>
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
.pagination span {
    color: #000;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    display: inline-block;
    width: 26px;
    height: 26px;
    text-align: center;
    padding-top: 5px;
}
.pagination span.active {
    color: rgb(43, 82, 255);
    cursor: default;
    background-color: #ccc;
}
</style>
