<template>
  <div>
    <div @click="onShow" :class="[$style.formWrap]">
      <span :class="[$style.popButton]">+</span>
      <transition name="fade">
      <div :class="[$style.popup]" v-if="flag">
        <div :class="[$style.delrow]" @click="getRow(id)">Редактировать</div>
        <div :class="[$style.delrow]" @click="handleDelRow(id)">Удалить запись</div>
      </div>
      </transition>
    </div>
    <div v-if="showEditFlag" :class="[$style.popup]">
      <div>
        <label>
          Категория:
          <br>
          <input v-model="rowCategory">
        </label>
      </div>
      <div>
        <label>
          Стоимость:
          <br>
          <input type="number" v-model.number="rowPrice">
        </label>
      </div>
      <br>
      <div>
        <button @click="editOneRow(id)">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: Number
    }
  },
  data () {
    return {
      flag: false,
      rowPrice: '',
      rowCategory: '',
      rowId: Number,
      showEditFlag: false
    }
  },
  computed: {
    ...mapGetters([
      'getPayList'
    ])
  },
  methods: {
    ...mapMutations([
      'deleteRow',
      'editRow'
    ]),
    onShow () {
      this.flag = !this.flag
    },
    handleDelRow (id) {
      this.deleteRow(id)
    },
    getRow (id) {
      const el = this.getPayList.find(el => el.id === id)
      console.log(el)
      this.showEditFlag = true
      this.rowPrice = el.price
      this.rowCategory = el.category
    },
    editOneRow (id) {
      this.editRow({ id: id, price: this.rowPrice, category: this.rowCategory })
      this.showEditFlag = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

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
    min-width: 150px;
    padding: 10px 20px;
    box-shadow: 0 0 16px #ccc;
    z-index: 100;
}
.delrow {
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 6px;
}
</style>
