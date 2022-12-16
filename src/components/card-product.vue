<template>
   <div class="block_product">
     <div class="block_product_image" :style="productBackground"></div>
     <div class="block_product_info">
       <div class="block_product_info-title">{{ product.name }}</div>
       <div class="block_product_info-price">{{ product.cost }}</div>
       <div class="block_product_info-weight">{{ product.amount }}</div>
     </div>
   </div>
</template>

<script>
export default {
  name: "card-product",
  computed: {
    productBackground() {
      return {
        background: 'url(\''+ this.product.photo +'\') 50%/cover no-repeat'
      }
    },
  },
  props: {
    product: {
      id: '1',
      name: 'Курица в маринаде',
      cost: '',
      amount: '100гр',
      photo: '',
    },
  },
}
</script>

<style scoped>
.block_product{
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
  width: 180px;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto 15px;
}
.block_product_image{
  width: 180px;
  height: 140px;
}


.block_product_info{
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
}
.block_product_info-title{
  font-weight: 700;
  height: 55px;
  font-size: 14px;
  flex: 1 1 auto;
}
.block_product_info-price{
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
}
.block_product_info-weight{
  margin-top: 10px;
  font-size: 15px;
}
</style>