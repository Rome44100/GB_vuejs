<template>
  <div :class="[$style.pagination]">
    <a href="#1">left</a>
    <a v-for="(n, index) in pages" :key="index" href="#1" @click="setPage(n)">{{ n }}</a>
    <a href="#1">right</a>
  </div>
</template>

<script>
export default {
  props: {
    onePageNums: {
      type: Number
    },
    pages: {
      type: Number
    }
  },
  data () {
    return {
      n: 1
    }
  },
  methods: {
    setPage (n) {
    }
  }
}
</script>

<style module>
.pagination {
    display: flex;
    justify-content: center;
    padding: 16px 0;
    gap: 14px;
    border: solid 1px #ccc;
}
.pagination a {
    color: #000;
    text-decoration: none;
}
</style>
