<template>
  <nav class="navbar">
    <div v-for="(company, index) in companies" :key="index" class="single-company">
      <div class="company-name">
      <img :src="require(`@/assets/img/${company.image}`)" :alt="company.name" class="company-image"/>
      <h2>{{ company.name }}</h2>
    </div>
    </div>
  </nav>
</template>
  
  <script>
  
  export default {
    name: 'NavBarCard',
    props: {
    companies: {
      type: Array,
      required: true,
    },
  },
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    width: calc(100% - 48px);
    height: calc(200px - 48px);
    border-radius: 20px;
    padding: 24px;
    background-color: #023A6233;
  }

  .single-company {
    width: calc(173px - 48px);
    height: calc(143px - 40px);
    border-radius: 16px;
    padding: 20px 24px;
    background-color: #011F35;
  }

  .company-name {
    display: flex;
    gap: 8px;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: white;
    margin: 0  
  }

  @media (max-width: 1440px) {
    .navbar {
    width: calc(100% - 48px);
  }

  }
  </style>