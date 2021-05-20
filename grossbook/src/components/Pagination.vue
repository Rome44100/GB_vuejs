<template>
  <div :class="[$style.pagination]">
    <ul>
      <li v-for="(n, index) in pages" :key="index">
        <a v-if="page == n" :class="[$style.active]" href="#1" @click="setPage($event)" :data-num="n">{{ n }}</a>
        <a v-else href="#1" @click="setPage($event)" :data-num="n">{{ n }}</a>
      </li>
    </ul>
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
    },
    page: {
      type: Number
    }
  },
  data () {
    return {
      n: 1
    }
  },
  methods: {
    setPage ($event) {
      this.$emit('setNumList', $event.target.dataset.num)
      $event.target.classList.add = 'active'
    }
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
