<template>
  <header>
    <img src="./assets/img/Rectangle 1.png" alt="rectangle image">
    <h1>The Magnificent Seven Companies</h1>
  </header>
  <NavBarCard></NavBarCard>
  <div class="big-cards-container">
    <CustomCard></CustomCard>
    <CustomCard></CustomCard>
  </div>
</template>

<script>
  import CustomCard from "./components/CustomCard.vue"
  import NavBarCard from "./components/NavBar.vue";
  import { stockService } from "./services/stock-service";
  import './main.css';

export default {
  name: 'App',
  components: {
    CustomCard,
    NavBarCard,
  },

  data() {
    return {
      companies: ['AAPL', 'MSFT', 'TSLA', 'NVDA', 'AMZN', 'META', 'GOOG'],
      companyData: [],
    }
  },

  async created() {
    const promises = this.companies.map(async (ticker) => {
    const data = await stockService.getRevenue(`$${ticker}`);
      console.log( ticker, data);
    });
    this.companyData = await Promise.all(promises);
    console.log(this.companyData);
    
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

.big-cards-container {
  display: flex;
  position: absolute;
  top: 380px;
  left: 100px;
}

#app {
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: 100px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
}
</style>
