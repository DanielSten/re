<template>
  <div class="wrapper">
      <a target="_blank" :href="getSettings.instagram"><i class='bx bxl-instagram-alt'></i></a>
      <RouterLink to="/moder"><div><i class='bx bx-key'></i></div></RouterLink>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "footer-page",
  computed: {
    ...mapGetters(['getSettings'])
  }
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
  color: #fff;
}
.bx-key{
  position: absolute;
  left: 10px;
  color: #fff;
}
</style>