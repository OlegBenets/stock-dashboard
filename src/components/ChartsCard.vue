<template>
  <div class="charts-card">
    <LineChart />
    <DonutChart />
  </div>
</template>

<script>
import LineChart from './LineChart.vue'
import DonutChart from './DonutChart.vue'

export default {
  name: 'ChartsCard',
  components: {
    LineChart,
    DonutChart
  }
}
</script>

<style scoped>
.charts-card {
  display: flex;
  gap: 32px;
}
</style>