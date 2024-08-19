<template>
    <nav class="navbar">
        <div class="single-company"></div>
        <div class="single-company"></div>
        <div class="single-company"></div>
        <div class="single-company"></div>
        <div class="single-company"></div>
        <div class="single-company"></div>
        <div class="single-company"></div>
    </nav>
  </template>
  
  <script>
  
  export default {
    name: 'NavBarCard',
  }
  </script>
  
  <style scoped>
  .navbar {
    position: absolute;
    top: 155px;
    left: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: calc(90vw - 48px);
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
  </style>