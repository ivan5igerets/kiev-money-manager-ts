<template>
  <div>
    <div class="css-header">
      <div class="css-page-title">{{$route.meta.title}}</div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  .css-header {
    background-color: #EDEDED;
    height: 50px;
    text-align: left;
  }

  .css-page-title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 450;
    line-height: 16px;
    color: #000000;
    font-size: 18px;
    padding-left: 10px;
    padding-top: 15px;
  }
</style>