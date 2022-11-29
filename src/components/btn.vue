<template>
  <a class="btn">
    Заказать
  </a>
</template>

<script>
export default {
  name: "btn"
}
</script>

<style scoped>
.btn{
  position: absolute;
  display: block;
  left: 30px;
  right: 30px;
  bottom: 30px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto',Arial,sans-serif;
  line-height: 1.55;
  font-weight: 700;
  border-width: 3px;
  border-radius: 50px;
  background-position: center center;
  border-color: #ffffff;
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  box-shadow: 0px 10px 35px 0px rgb(255 255 255 / 60%);
}
</style>