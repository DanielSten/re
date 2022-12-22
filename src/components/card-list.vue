<template>
  <div class="flex">
    <card-product v-for="product in products" :product="product"></card-product>
  </div>
</template>

<script>
import cardProduct from "./card-product.vue";

export default {
  name: "card-list",
  components: {
    cardProduct,
  },
  props: {
    products: [],
  },

}
</script>

<style scoped>
.flex{
  display: flex;
  flex-wrap:wrap;
}
</style>