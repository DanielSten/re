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
  data() {
    return{
      products: [
        {
          id: '1',
          name: 'Курица в маринаде',
          cost: '410 р.',
          photo: '/icons/pig.jpg',
          amount: '400гр.',
        },
        {
          id: '2',
          name: 'Шашлык из курицы',
          cost: '250 р.',
          photo: '/icons/bbq.jpg',
          amount: '160/50/40/40гр.',
        },
        {
          id: '3',
          name: 'Шаурма с курицей на мангале',
          cost: '1500 р.',
          photo: '/icons/bbq.jpg',
          amount: '350/50гр.',
        },
        {
          id: '4',
          name: 'Курица в маринаде',
          cost: '410 р.',
          photo: '/icons/pig.jpg',
          amount: '400гр.',
        },
        {
          id: '5',
          name: 'Шашлык из курицы',
          cost: '250 р.',
          photo: '/icons/bbq.jpg',
          amount: '160/50/40/40гр.',
        },
      ]
    }

  },
}
</script>

<style scoped>
.flex{
  display: flex;
  flex-wrap:wrap;
}
</style>