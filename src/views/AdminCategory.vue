<template>
  <div class="wrapper">
    <class-title>Категории</class-title>
    <btn-category>Категория 1</btn-category>
    <btn-category>Категория 1</btn-category>
    <btn-category>Категория 1</btn-category>
    <btn-category>Категория 1</btn-category>
    <btn-without-border>Добавить новую категорию</btn-without-border>
    <button-admin>Сохранить</button-admin>
    <button-admin-cancel class="block_btn-cancel">Отменить изменения</button-admin-cancel>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import btnCategory from "../components/admin/btn-category.vue";
import btnWithoutBorder from "../components/admin/btn-without-border.vue";
import buttonAdmin from "../components/admin/button-admin.vue";
import buttonAdminCancel from "../components/admin/button-admin-cancel.vue";




export default {
  name: "AdminCategory",
  components: {
    classTitle,
    btnCategory,
    btnWithoutBorder,
    buttonAdmin,
    buttonAdminCancel,


  },
}
</script>

<style scoped>
.wrapper{
  padding: 30px;
}

.block_btn-cancel{
  margin-top: 15px;
}
</style>