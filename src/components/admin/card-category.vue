<template>
  <div>
    <div class="category_name">{{ section.name }}</div>
    <card-product v-for="good in section.goods" :good="good"></card-product>
  </div>
</template>

<script>
import cardProduct from "./card-product.vue";
import {mapGetters, mapActions} from "vuex";
import Axios from "axios";


export default {
  name: "card-category",
  components: {
    cardProduct,

  },
  props: {
    section: {
      goods: []
    }
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