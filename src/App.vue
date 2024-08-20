<template>
  <header>
    <img src="./assets/img/Rectangle 1.png" alt="rectangle image">
    <h1>The Magnificent Seven Companies</h1>
  </header>
  <NavBarCard :companies="companies"/>
  <ChartsCard />
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
      companies: [],
      companyData: [],
    }
  },

  async created() {
    const tickers = ['AAPL', 'MSFT', 'TSLA', 'NVDA', 'AMZN', 'META', 'GOOG'];

    this.companies = tickers.map(ticker => ({
      ticker,
      name: stockService.getCompanyName(ticker),
    }));

    const promises = tickers.map(async (ticker) => {
    // const data = 
    await stockService.getRevenue(`$${ticker}`);
      // console.log( ticker, data);
    });
    this.companyData = await Promise.all(promises);
    // console.log(this.companyData);
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
</style>
