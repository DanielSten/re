<template>
  <div>
    <div class="category_name">{{ section.name }}</div>
    <card-product v-for="good in goods" :good="good"></card-product>
  </div>
</template>

<script>
import cardProduct from "./card-product.vue";



export default {
  name: "card-category",
  components: {
    cardProduct,

  },
  props: {
    section:{
      default() {
        return {
          name: "Категория",
          background: '',
        }
      },
    }
  },
  data() {
    return{
      goods: [
        {
          name: "Товар",
          photo: "img358243.jpg",
          cost: 450.00,
          amount: "1000гр"
        },
        {
          name: "Товар",
          photo: "img358243.jpg",
          cost: 450.00,
          amount: "1000гр"
        },
        {
          name: "Товар",
          photo: "img358243.jpg",
          cost: 450.00,
          amount: "1000гр"
        },
      ],
    }
  }

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