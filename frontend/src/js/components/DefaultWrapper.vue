<template>
  <div class="container">
    <TheHeader />
    <div class="main">
      <div class="sidebar">
        <ul>
          <li>
            <router-link to="/" exact>
              <span>Create User</span>
            </router-link>
          </li>
          <li>
            <router-link to="/students" exact>
              <span>Students List</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="page-content">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script setup>

import TheHeader from "./layout/TheHeader.vue";
</script>

<style scoped>
.sidebar ul {
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.sidebar ul li {
  display: flex;
  align-items: center;
}
.sidebar ul li a {
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  white-space: nowrap;
}
.sidebar ul li a.router-link-exact-active span{
  color: #303f9e;
  font-weight: 700;
}

.sidebar ul li a:hover,
.sidebar ul li a.router-link-exact-active{
  background-color: #e8ecef;
}
.sidebar ul li span {
  margin-left: 16px;
  font-size: 16px;
  font-weight: 100;
}
.sidebar ul li i {
  font-size: 18px;
  color: #111;
  font-weight: normal;
}
.sidebar ul li a. router-link-exact-active i {
  color: #303f9e;
}


.page-content {
  padding: 10px 20px;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
}

</style>