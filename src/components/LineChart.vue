<template>
    <div class="chart-container">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js'
  
  // Register necessary Chart.js components
  ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
);
  
export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      },
      colors: [
        "#39DAFF", "#31BFE2", "#29A5C5", "#218AA8", "#196F8C", "#11546F", "#093A52"
      ]
    };
  },

  
}


</script>

<style scoped>
.chart-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 32px;
  border-radius: 10px;
  background-color: #011f35;
  width: calc(714px - 64px);
  height: calc(372px - 40px);
}

@media (max-width: 1440px) {
    .chart-container {
    width: calc(60% - 64px);
  }
}
</style>
