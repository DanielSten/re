<template>
  <div class="wrapper">
    <class-title>Изменение товара</class-title>
    <form ref="form" action="">
      <div class="block_image_product"></div>
      <admin-input
          required="required"
          name="password"
          title="Название товара"
          subtitle="Введите наименование товара"
      ></admin-input>
      <admin-input
          required="required"
          name="password"
          title="450"
          subtitle="Введите стоимость товара (руб)"
      ></admin-input>
      <admin-input
          required="required"
          name="password"
          title="1 кг"
          subtitle="Укажите вес или количество"
      ></admin-input>
      <drop-down-list
          required="required"
          name="password"
          subtitle="Выберите категорию, в которой будет отображаться товар"
      ></drop-down-list>
      <button-admin>Сохранить</button-admin>
      <button-admin-cancel class="btn-cancel">Отменить изменения</button-admin-cancel>
      <button-admin class="btn-delete">Удалить товар</button-admin>
    </form>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import adminInput from "../components/admin/admin-input.vue";
import buttonAdmin from "../components/admin/button-admin.vue";
import buttonAdminCancel from "../components/admin/button-admin-cancel.vue";
import dropDownList from "../components/admin/drop-down-list.vue";







export default {
  name: "EditingProduct",
  components: {
    classTitle,
    adminInput,
    buttonAdmin,
    buttonAdminCancel,
    dropDownList,

  }
}
</script>

<style scoped>

.wrapper{
  padding: 30px;
}
.block_image_product{
  height: 200px;
  background: grey;
  margin-bottom: 30px;
}


.btn-cancel{
  margin: 15px 0;
}
.btn-delete{
  background: #004b00;
}

</style>