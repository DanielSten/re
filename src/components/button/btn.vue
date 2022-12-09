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
  height: 50px;
  display: block;
  left: 30px;
  right: 30px;
  bottom: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto',Arial,sans-serif;
  line-height: 44px;
  font-weight: 700;
  border-width: 3px;
  border-radius: 50px;
  background-position: center center;
  border-color: #ffffff;
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}
.btn:hover, .btn:active{
  background-color: #ffffff;
  color: #1c0f08;
}

</style>