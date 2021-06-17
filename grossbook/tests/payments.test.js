import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import PaymentForm from '../src/components/PaymentForm'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
// const router = new VueRouter()

const $route = {
  // path: '/add/payment/',
  path: '/',
  query: {
    value: ''
  },
  params: {
    category: ''
  }
}

localVue.use(Vuex)

describe('Тест компонента формы добавления траты', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      addRow: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  test('Показ формы', () => {
    const Wrapper = shallowMount(PaymentForm, {
      mocks: {
        $route
      }
    })
    // Wrapper.vm.$route.path // /some/path
    const show_expense_form = Wrapper.find('#show_expense_form')
    const add_expense = Wrapper.find('#add_expense')

    show_expense_form.trigger('click')
    expect(Wrapper.vm.flag).toBe(true)
  })

  test('Скрытие формы после добавления строки', () => {
    const Wrapper = shallowMount(PaymentForm, {
      mocks: {
        $route
      }
    })

    const show_expense_form = Wrapper.find('#show_expense_form')
    const add_expense = Wrapper.find('#add_expense')

    show_expense_form.trigger('click')
    expect(Wrapper.vm.flag).toBe(true)

    add_expense.trigger('click')
    expect(Wrapper.vm.flag).toBe(false)
  })

  test('Добавление данных через ссылку без значений', () => {
    $route.path = '/add/payment/'
    const Wrapper = shallowMount(PaymentForm, {
      mocks: { $route }
    })
    // Wrapper.vm.$route.path // /some/path
    expect(Wrapper.vm.flag).toBe(true)
  })

  test('Добавление данных через ссылку со значениями', () => {
    $route.path = '/add/payment/'
    $route.params.category = 'Food'
    $route.query.value = '200'
    // как передать хранилище одновременно с маршрутизатором?????????
    const Wrapper = shallowMount(PaymentForm, {
      mocks: { $route }
    })
    // Wrapper.vm.$route.path // /some/path
    expect(Wrapper.vm.category).toContain('Food')
  })

  test('Добавление данных в форму и в хранилище', () => {
    // const Wrapper = mount (PaymentForm)
    // как передать хранилище одновременно с маршрутизатором?????????
    const Wrapper = shallowMount(PaymentForm, {
      mocks: { store, localVue, $route }
    })

    const add_expense = Wrapper.find('#add_expense')

    // const date = Wrapper.find('input[name=date')
    // const category = Wrapper.find('input[name=category]')
    // const expense = Wrapper.find('input[name=expense]')

    // date.setValue('10.10.2020')
    // category.setValue('catijoru')
    // expense.setValue(2000)

    add_expense.trigger('click')
    // Wrapper.vm.$emit('save')
    expect(actions.addRow).toHaveBeenCalled()
  })
})
