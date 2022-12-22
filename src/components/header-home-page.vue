<template>
  <div class="wrapper" :style="{ 'background-image': 'url(' + getSettings.main_image + ')' }">
    <h1 class="name">{{ getSettings.siteTitle }}</h1>
    <div class="title-header">
      <h2>
        {{ getSettings.siteSubtitle }}
      </h2>
      <p>{{ getSettings.siteText }}</p>
    </div>
    <btn></btn>
  </div>
</template>

<script>
import btn from "./button/btn.vue";
import {mapGetters} from "vuex";

export default {
  name: "header-home-page",
  components: {
    btn,
  },
  computed: {
    ...mapGetters(['getSettings'])
  }
}
</script>

<style scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  padding: 15px 40px;
  color: #ffffff;
  background-size: contain;
  background-position: 35vw 10vw;
  background-color: #1c0f08;
  background-repeat: no-repeat;
}
.name{
  font-weight: 900;
  font-size: 38px;
  text-align: center;
}
.title-header{
  margin-top: 70px;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 130px;
  text-shadow: 0 1px 5px rgba(0,0,0,.8);
}
h2{
  font-size: 28px;
  margin-bottom: 15px;
}
</style>