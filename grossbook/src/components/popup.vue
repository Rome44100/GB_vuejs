<template>
  <div>
      <div @click="onShow" :class="[$style.formWrap]">
        <span :class="[$style.popButton]">+</span>
        <div :class="[$style.popup]" v-if="flag">
          Редактировать<br>{{ id }}
          Удалить запись
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    }
  },
  data () {
    return {
      flag: false
    }
  },
  methods: {
    onShow () {
      this.flag = !this.flag
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
  }
}
</script>

<style module>
.formWrap {
    position: relative;
}
.popButton {
    cursor: pointer;
}
.popup {
    position: absolute;
    right: 0;
    background-color: #fff;
    min-width: 130px;
    padding: 8px 20px;
    box-shadow: 0 0 16px #ccc;
    z-index: 100;
}
</style>
