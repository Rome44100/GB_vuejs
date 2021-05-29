export default {
  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show (name, params) {
        console.log('Показано')
        this.EventBus.$emit('show', { name, params })
      },
      close () {
        console.log('Закрыто')
      }
    }
  }
}
