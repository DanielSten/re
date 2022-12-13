<template>
  <div class="block_wrapper">
    <div class="title">Изображение на главной странице</div>
    <div class="block_image"></div>
  </div>
</template>

<script>
export default {
  name: "picture-main"
}
</script>

<style scoped>
.block_wrapper{
  margin-bottom: 30px;
}


.title{
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.018em;
  margin-bottom: 25px;
}

.block_image{
  height: 200px;
  background: grey;
}
</style>