<template>
  <div class="loader" :class="'loader--'+type">
    <div class="loader__item">
      <div class="animated-background">
        <div class="animated-background__inner df j-center">
          <img src="/src/assets/spinner.gif" alt="GIF"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GLoading",
  props: {
    type: {
      type: String,
      default: 'general'
    }
  }
}
</script>

<style>
.loader {
  height: 100vh;
  width: 100%;
}

.loader__item {
   position: absolute;
   bottom: auto;
   left: 50%;
   right: auto;
   top: 50%;
}

</style>