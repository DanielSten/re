<template>
  <div class="wrapper">
      <div><i class='bx bxl-instagram-alt'></i></div>
      <RouterLink to="/moder"><div><i class='bx bx-key'></i></div></RouterLink>
  </div>
</template>

<script>
export default {
  name: "footer-page"
}
</script>

<style scoped>
.wrapper{
  background-color: #1c0f08;
  height: 9vh;
  color: #ffff;
  padding: 20px;
  text-align: center;
}
.bxl-instagram-alt{
  font-size: 28px;
}
.bx-key{
  position: absolute;
  left: 10px;
  color: #fff;
}
</style>