<template>
  <div class="wrapper">
    <class-title>Категории</class-title>
    <btn-category v-for="section in sections" :section="section"></btn-category>
    <btn-without-border @click="addCategory">Добавить новую категорию</btn-without-border>
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
import Axios from "axios";




export default {
  name: "AdminCategory",
  components: {
    classTitle,
    btnCategory,
    btnWithoutBorder,
    buttonAdmin,
    buttonAdminCancel,


  },
  data() {
    return {
      sections: [],
    }
  },
  methods: {
    addCategory() {
      Axios.post('/add-section', {
        token: localStorage.getItem('token'),
      })
          .then(response => {
            if(response.data._status){
              this.$router.push('/moder-category-editing');
            } else {

            }
          })
          .catch(e => console.error(e));
    },
    getInfo () {
      Axios.get('/all-info')
          .then(response => {
            this.sections = response.data.sections;
          })
          .catch(e => console.error(e));
    }
  },
  mounted() {
    this.getInfo()
  }
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