<template>
  <div class="css-main-container">
    <div class="сss-profile-container">
      <!-- <div><input type="text" name="name" placeholder="Имя" /></div> -->

      <div><input type="password" name="oldPassword" placeholder="Введите старый пароль" /></div>
      <div><input type="password" name="newPassword" placeholder="Введите новый пароль" /></div>
      <div><input type="password" name="newPassword2" placeholder="Подтвердите новый пароль" /></div>

      <!-- <div class="css-password"> -->
        <!-- <p style="font-size: 14px;">Пароль</p> -->
        <!-- <router-link class="css-password-change" to="#"> Изменить </router-link> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<style>
  .css-page-title {
    font-family: Inter, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    padding-left: 10px;
    padding-top: 15px;
  }
  .css-header {
    background-color: #EDEDED;
    height: 50px;
    text-align: left;
  }

  .сss-profile-container {
    text-align: left;
    padding: 0 15px 0 15px;
  }

  .сss-profile-container div {
    margin-top: 15px;
  }

  .css-password {
    display: flex;
    font-size: 14px;
  }

  .css-password p {
    color: #B6B6B6;
  }

  .css-password-change {
    margin-left: 5px;
  }
</style>