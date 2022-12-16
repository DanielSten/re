<template>
  <div class="wrapper">
    <h1 class="name">Алёнка</h1>
    <div class="title-header">
      <h3>
        Шашлык и мясо на любой вкус!
      </h3>
      <p>Пропробуйте нашу Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum delectus dolores, et fugiat ipsam nulla rerum tenetur.</p>
    </div>
    <btn></btn>
  </div>
</template>

<script>
import btn from "./button/btn.vue";

export default {
  name: "header-home-page",
  components: {
    btn,
  }
}
</script>

<style scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  padding: 15px 40px;
  color: #ffffff;
  background: url('/icons/header.webp') no-repeat;
  background-size: contain;
  background-position: 35vw 10vw;
  background-color: #1c0f08;
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
h3{
  font-size: 28px;
  margin-bottom: 15px;
}
</style>