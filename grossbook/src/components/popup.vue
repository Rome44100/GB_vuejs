<template>
  <div>
      <div @click="onShow">
        +
        <div v-if="flag">edit, delete row</div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    onShow () {
      console.log('show me!')
    }
  },
  created () {
    // console.log(this.$modal.EventBus)
    this.$modal.EventBus.on('show', this.onShow)
  }
}
</script>

<style>

</style>
