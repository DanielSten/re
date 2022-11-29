<template>
  <div class="wrapper">
    <div class="name">Алёнка</div>
    <div class="image-header">
    </div>
    <div class="title-header">
      Шашлык и мясо на любой вкус!
    </div>
    <btn></btn>
  </div>
</template>

<script>
import btn from "./btn.vue";

export default {
  name: "header-home-page",
  components: {
    btn
  }
}
</script>

<style scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  background-color: #1c0f08;
  padding: 15px 40px;
  color: #ffffff;
}
.name{
  font-weight: 900;
  font-size: 38px;
}
.image-header{
  margin-top: 50px;
  height: 250px;
  position: relative;
  right: 15px;
  background: url('./icons/shash.png') 0 0/cover no-repeat;
}
.title-header{
  margin-top: 70px;
  font-size: 20px;
  font-weight: 500;
}
</style>