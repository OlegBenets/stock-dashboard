<template>
  <div class="chart-container">
    <div class="chart">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>
    <div class="info">
      <ul>
        <li v-for="(item, index) in chartData.datasets[0].data" :key="index">
          <span
            :style="{
              backgroundColor: chartData.datasets[0].backgroundColor[index],
            }"
            class="info-color"
          ></span>
          {{ chartData.labels[index] }}: {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "DonutChart",
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: [
          "Apple",
          "Microsoft",
          "Tesla",
          "NVIDIA",
          "Amazon",
          "Meta",
          "Alphabet",
        ],
        datasets: [
          {
            label: "Market Share",
            data: [300, 200, 100, 100, 80, 60, 30],
            backgroundColor: [
              "#39DAFF",
              "#31BFE2",
              "#29A5C5",
              "#218AA8",
              "#196F8C",
              "#11546F",
              "#093A52",
            ],
            hoverOffset: 4,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Market Share",
            font: {
              size: 20,
              weight: "bold",
            },
            color: "#FFFFFF",
            padding: {
              top: 10,
              bottom: 10,
            },
          },
          legend: {
            display: false, // Disable the default legend
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #011f35;
  width: calc(494px - 64px);
  height: calc(372px - 40px);
}

.chart {
  flex: 1;
}

.info {
  margin-left: 20px;
  flex: 0 0 auto;
}

.info ul {
  list-style: none;
  padding: 0;
}

.info li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #ffffff;
}

.info-color {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
}

@media (max-width: 1440px) {
  .chart-container {
    width: calc(40% - 64px);
  }
}
</style>
