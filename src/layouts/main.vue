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
  .css-header {
    background-color: #EDEDED;
    height: 50px;
    text-align: left;
  }

  .css-page-title {
    font-family: Inter, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    padding-left: 10px;
    padding-top: 15px;
  }
</style>