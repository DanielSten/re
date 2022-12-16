<template>
  <div>
    <card-category v-for="section in sections" :section="section"></card-category>
    <btn-without-border>Добавить НОВЫЙ ТОВАР</btn-without-border>
  </div>
</template>

<script>
import cardCategory from "./card-category.vue";
import btnWithoutBorder from "./btn-without-border.vue";



export default {
  name: "category-and-products",
  components: {
    cardCategory,
    btnWithoutBorder,

  },
  props: {

  },

}
</script>

<style scoped>
.category_name{
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.018em;
  margin-bottom: 25px;
}
</style>