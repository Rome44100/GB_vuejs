<template>
  <div class='control-section'>
    <div class='control-section'>
        <ejs-accumulationchart
            id='container'
            ref='pie'
            style='display:block'
            :theme='theme'
            :legendSettings='legendSettings'
            :tooltip='tooltip'
            :enableAnimation='enableAnimation'
            :enableSmartLabels='enableSmartLabels'>
            <e-accumulation-series-collection>
                <e-accumulation-series
                    :dataSource='data'
                    xName='x'
                    yName='y'
                    :radius='radius'
                    innerRadius='20%'
                    :dataLabel='dataLabel'></e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import {
  AccumulationChartPlugin,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip
  // containsRect
} from '@syncfusion/ej2-vue-charts'

import { mapGetters } from 'vuex'
// import func from '../../vue-temp/vue-editor-bridge'

Vue.use(AccumulationChartPlugin)

export default Vue.extend({
  data () {
    return {
      theme: 'Dark',
      data: [
        { x: 'Preloader', y: 100, r: '100%' }
        // { x: 'Belgium', y: 551500, r: '70%' },
        // { x: 'Cuba', y: 312685, r: '84%' },
        // { x: 'Dominican Republic', y: 350000, r: '97%' },
        // { x: 'Egypt', y: 301000, r: '84%' },
        // { x: 'Kazakhstan', y: 300000, r: '70%' },
        // { x: 'Somalia', y: 357022, r: '90%' }
      ],
      // data: setTimeout(this.convertDBtoChart(), 3000),
      radius: 'r',
      legendSettings: { visible: true },
      dataLabel: { visible: true, position: 'Outside', name: 'x' },
      tooltip: {
        enable: true
        // header: `<b>${point.x}</b>`,
        // format: `Composition: <b>${point.y}</b>`
      },
      enableAnimation: true,
      enableSmartLabels: true
    }
  },
  provide: {
    accumulationchart: [
      AccumulationLegend,
      PieSeries,
      AccumulationDataLabel,
      AccumulationTooltip
    ]
  },
  computed: {
    ...mapGetters([
      'getPayList'
    ])
  },
  methods: {
    convertDBtoChart () {
      const categories = this.getPayList.map(el => el.category)
      const uniqueCategories = categories.filter((val, idx, self) => self.indexOf(val) === idx)
      this.data = uniqueCategories.map((el) => {
        return {
          x: el,
          y: this.getPayList.filter(item => item.category === el)
            .reduce((acc, cur) => acc + cur.price, 0),
          r: (100 - Math.ceil(
            this.getPayList.filter(item => item.category === el)
              .reduce((acc, cur) => acc + cur.price, 0) *
              100 /
              this.getPayList.reduce((acc, cur) => acc + cur.price, 0)
          )) + '%'
        }
      })
    }
  },
  created () {
    // эмуляция задержки из-за загрузки по сети, д.б. более 1 сек, т.к. для
    // fetch установлено 1 секунда
    setTimeout(() => {
      this.convertDBtoChart()
    }, 1500)
  }
})
</script>

<style scoped>
.control-section {
    min-height: 450px
}
</style>
