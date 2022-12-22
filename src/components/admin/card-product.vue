<template>
  <RouterLink :to="'/moder-product-editing/' + good.id">
    <div class="block_product">
      <div class="product_img" :style="{ 'background-image': 'url(' + good.photo + ')' }"></div>
      <div class="product_info">
        <div class="product_info-name">{{ good.name }}</div>
        <div class="product_info-price">{{ good.cost || 0 }} руб.</div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "card-product",
  props:{
    good: {},
  },
}
</script>

<style scoped>
.block_product{
  display: flex;
  margin-bottom: 20px;
  padding: 8px;
}
.block_product:hover{
  background-color: #ececec;
}




.product_img{
  background-color: grey;
  width: 100px;
  height: 55px;
  background-position: center;
  background-size: cover;
}


.product_info{
  margin-left: 20px;
  padding: 3px 0;
}
.product_info-name{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.87);
}
.product_info-price{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 5px;
}
</style>