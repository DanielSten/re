<template>
  <div>
    <card-category v-for="section in getSections" :section="section"></card-category>
    <btn-without-border @click="addProduct">Добавить НОВЫЙ ТОВАР</btn-without-border>
  </div>
</template>

<script>
import cardCategory from "./card-category.vue";
import btnWithoutBorder from "./btn-without-border.vue";
import {mapActions, mapGetters} from "vuex";
import Axios from "axios";


export default {
  name: "category-and-products",
  components: {
    cardCategory,
    btnWithoutBorder,

  },
  methods:{
    ...mapActions(['loadData']),
    addProduct() {
      Axios.post('/add-product', {
        token: localStorage.getItem('token'),
      })
          .then(response => {
            if(response.data._status){
              this.loadData()
            } else {
            }
          })
          .catch(e => console.error(e));
    },
  },
  computed: {
    ...mapGetters(['getSections'])
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