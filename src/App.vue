<template>
  <header>
    <img src="./assets/img/Rectangle 1.png" alt="rectangle image">
    <h1>The Magnificent Seven Companies</h1>
  </header>
  <NavBarCard :companies="companyData"/>
  <ChartsCard :companyData="companyData"/>

  <div v-for="company in companyData" :key="company.ticker" class="company-card">
    <h2>{{ company.name }}</h2>
    <img :src="require(`@/assets/img/${company.image}`)" :alt="company.name">
    <h3>Revenue: {{ company.revenue}}</h3>
    <h3>Net Income: {{ company.netIncome}}</h3>
    <h3>Gross Margin: {{ company.grossMargin}}</h3>
    <h3>Quarters: {{ company.quarters }}</h3>
  </div>

<div style="display: flex">
  <a target="_blank" href="https://icons8.com/icon/yqf95864UzeQ/nvidia">nvidia</a> Icon von <a target="_blank" href="https://icons8.com">Icons8</a>
</div>
</template>

<script>
  import NavBarCard from "./components/NavBar.vue";
  import { stockService } from "./services/stock-service";
  import './main.css';
  import ChartsCard from "./components/ChartsCard.vue";

export default {
  name: 'App',
  components: {
    ChartsCard,
    NavBarCard,
  },

  data() {
    return {
      companyData: [],
    }
  },

  async created() {
    try {
      const companies = stockService.getCompanies();

      const promises = companies.map(async (company) => {
        const data = await stockService.getCompanyData(company.ticker);
        return {
          ...company,
          ...data
        };
      });

      this.companyData = await Promise.all(promises);
      console.log(this.companyData);
    } catch (error) {
      console.error('Error loading company data:', error);
    }
  }
}
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

header {
  position: absolute;
  top: 64px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
}

h1 {
  font-size: 36px;
  font-weight: 500;
  color: #F9F9F9;
}

#app {
  display: flex;
  flex-direction: column;
  gap: 100px;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: 200px 100px 100px 100px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
}

.company-card {
  margin-bottom: 20px;
  color: white;
}
</style>
