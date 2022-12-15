<template>
  <RouterLink to="/moder-category-editing">
    <div class="flex">
      <div class="category_name">{{ section.name }}</div>
      <div class="category_delete"><i class='bx bx-x' ></i></div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "btn-category",
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
}
</script>

<style scoped>
.flex{
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 4px;
  display: flex;
  justify-content:space-between;
  margin-bottom: 16px;
  color: #000000;
}


.category_name{
  font-weight: 400;
  font-size: 16px;
  margin: 16px;
}

.category_delete{
  height: 24px;
  margin: 16px 12px;
}
.bx-x{
  font-size: 24px;
}
</style>