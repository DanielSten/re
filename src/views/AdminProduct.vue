<template>
  <div class="wrapper">
    <class-title>Товары</class-title>
    <category-and-products></category-and-products>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import categoryAndProducts from "../components/admin/category-and-products.vue";



export default {
  name: "AdminProduct",
  components: {
    classTitle,
    categoryAndProducts,


  },
}
</script>

<style scoped>
.wrapper{
  padding: 30px;
}
</style>