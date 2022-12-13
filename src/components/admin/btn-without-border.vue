<template>
  <div class="flex">
    <div><i class='bx bx-plus' ></i></div>
    <div class="name"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "btn-without-border"
}
</script>

<style scoped>
.flex{
  display: flex;
  color: #832543;
  margin: 30px 0;
}


.bx-plus{
  position: relative;
  bottom: 3px;
  font-size: 24px;
}
.name{
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-left: 8px;
}
</style>