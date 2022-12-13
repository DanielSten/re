<template>
  <div class="wrapper">
    <class-title>Прочие настройки</class-title>
    <picture-main></picture-main>
    <form ref="form" action="">
      <admin-input
          required="required"
          name="password"
          title="8 999 999 99 99"
          subtitle="Номер телефона для заказов"
      ></admin-input>
      <admin-input
          required="required"
          name="password"
          title="9 888 888 88 88"
          subtitle="Номер телефона для отображения в контактах"
      ></admin-input>
      <admin-input
          required="required"
          name="password"
          title="Аленка"
          subtitle="Название сайта"
      ></admin-input>
      <admin-input
          required="required"
          name="password"
          title="Аленка"
          subtitle="Заголовок на главной странице"
      ></admin-input>
      <admin-input
          required="required"
          name="password"
          title="Аленка"
          subtitle="Текст на главной странице"
      ></admin-input>
      <button-admin>Сохранить</button-admin>
      <button-admin-cancel class="btn-cancel">Отменить изменения</button-admin-cancel>
    </form>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import pictureMain from "../components/admin/picture-main.vue";
import adminInput from "../components/admin/admin-input.vue";
import buttonAdmin from "../components/admin/button-admin.vue";
import buttonAdminCancel from "../components/admin/button-admin-cancel.vue";



export default {
  name: "AdminOtherSettings",
  components: {
    classTitle,
    pictureMain,
    adminInput,
    buttonAdmin,
    buttonAdminCancel,


  },

}
</script>

<style scoped>
.wrapper{
  padding: 30px;
}
.btn-cancel{
  margin-top: 15px;
}
</style>