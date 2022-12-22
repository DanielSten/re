<template>
  <div class="wrapper">
    <class-title>Прочие настройки</class-title>
    <picture-main></picture-main>
    <form ref="form" action="" @submit.prevent="onSubmit">
      <admin-input
          v-model="getSettings.numberForOrder"
          required="required"
          name="password"
          title="+7 999 999 99 99"
          subtitle="Номер телефона для заказов"
      ></admin-input>
      <admin-input
          v-model="getSettings.siteTitle"
          required="required"
          name="password"
          title="Аленка"
          subtitle="Название сайта"
      ></admin-input>
      <admin-input
          v-model="getSettings.siteSubtitle"
          required="required"
          name="password"
          title="Аленка"
          subtitle="Заголовок на главной странице"
      ></admin-input>
      <text-area-settings
          v-model="getSettings.siteText"
          required="required"
          name="password"
          title="Аленка"
          subtitle="Текст на главной странице"
      ></text-area-settings>
      <admin-input
          v-model="getSettings.btnTitle"
          required="required"
          name="password"
          title="Заказать"
          subtitle="Надпись на кнопке заказа"
      ></admin-input>
      <admin-input
          v-model="getSettings.productsTitle"
          required="required"
          name="password"
          title="Наша витрина"
          subtitle="Заголовок витрины"
      ></admin-input>
      <admin-input
          v-model="getSettings.contactTitle"
          required="required"
          name="password"
          title="Контакты"
          subtitle="Заголовок контактов"
      ></admin-input>
      <admin-input
          v-model="getSettings.btnContactTitle"
          required="required"
          name="password"
          title="+7 888 888 88 88"
          subtitle="Номер телефона для отображения в контактах"
      ></admin-input>
      <admin-input
          v-model="getSettings.contactEmail"
          required="required"
          name="password"
          title="Электронная почта"
          subtitle="Электронная почта в контактах"
      ></admin-input>
      <admin-input
          v-model="getSettings.contactAddress"
          required="required"
          name="password"
          title="Адрес"
          subtitle="Адрес в контактах"
      ></admin-input>
      <text-area-settings
          v-model="getSettings.contactWorkTime"
          required="required"
          name="password"
          title="Часы работы"
          subtitle="Часы работы"
      ></text-area-settings>
      <admin-input
          v-model="getSettings.instagram"
          required="required"
          name="password"
          title="Инстаграмм"
          subtitle="Ссылка на страницу в интраграмм"
      ></admin-input>
      <button-admin type="submit" >Сохранить</button-admin>
      <button-admin-cancel class="btn-cancel" @click="onCancel">Отменить изменения</button-admin-cancel>
    </form>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import pictureMain from "../components/admin/picture-main.vue";
import adminInput from "../components/admin/admin-input.vue";
import buttonAdmin from "../components/admin/button-admin.vue";
import buttonAdminCancel from "../components/admin/button-admin-cancel.vue";
import Axios from "axios";
import {mapActions, mapGetters} from "vuex";
import textAreaSettings from "../components/admin/text-area-settings.vue";




export default {
  name: "AdminOtherSettings",
  components: {
    classTitle,
    pictureMain,
    adminInput,
    buttonAdmin,
    buttonAdminCancel,
    textAreaSettings


  },
  computed: {
    ...mapGetters(['getSettings']),
  },
  methods: {
    ...mapActions(['loadData']),


    onSubmit() {
      Axios.post('/save-setting', {
        token: localStorage.getItem('token'),
        settings: this.getSettings
      })
          .then(response => {
            if (response.data._status) {
              this.loadData()
            }
          })
          .catch(e => console.error(e));
    },
    onCancel() {
      this.loadData()
    }
  }

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