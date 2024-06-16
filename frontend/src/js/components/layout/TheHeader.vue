<template>
    <div class="header">
      <div class="header-logo">
       <g-icon name="burger"></g-icon>
        <span class="header-title">Student Management Dashboard</span>
      </div>
    </div>
</template>
<script setup>

import GIcon from "../general/GIcon.vue";
</script>

<style>
.header {
  height: 50px;
  background: #303f9f;
  width: 100%;
  display: flex;
  align-items: center;
  flex-basis: 100%;
}
.site-logo {
  height: 32px;
  width: 32px;
  min-height: 32px;
  min-width: 32px;
  margin: 0 18px 0 15px;
}
.site-logo path {
  fill: #fff;
}
.header-title {
  color: #fff;
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 400;
}
.page-content h1 {
  font-size: 20px;
  font-weight: 400;
  color: #333;
}

.header-logo {
  display: flex;
  align-items: center;
  transition: width 0.5s ease;
}


</style>