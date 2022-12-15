<template>
  <div class="flex">
    <RouterLink to="/moder-main"><div class="btn_back"><i class='bx bx-chevron-left'></i></div></RouterLink>
    <div class="title"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "classTitle"
}
</script>

<style scoped>
div{
  font-weight: 400;
  font-size: 25px;
}
.flex{
  display: flex;
  margin-bottom: 50px;
}
.btn_back{
  border: 1px solid rgba(224, 224, 224, 1);
  display: inline-block;
  border-radius: 4px;
  color: #000000;
}
.btn_back:hover{
  background: #dadada;
}
.bx-chevron-left{
  font-size: 24px;
  margin: 10px;
}
.title{
  margin-left: 20px;
  line-height: 46px;
}
</style>