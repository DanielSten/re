<template>
  <div class="wrapper">
    <div class="flex">
      <RouterLink to="/moder-category"><div class="btn_back"><i class='bx bx-chevron-left'></i></div></RouterLink>
      <div class="title">Изменение категории</div>
    </div>
    <form ref="form" @submit.prevent="onSubmit">
      <input type="file" ref="input" style="display: none">
      <div class="block_image_product" @click="$refs.input.click()" :src="imageFile"></div>
      <admin-input
          required="required"
          v-model="name"
          title="Название категории"
          subtitle="Введите наименование категории"
      ></admin-input>
      <button-admin type="submit">Сохранить</button-admin>
      <button-admin-cancel class="btn-cancel">Отменить изменения</button-admin-cancel>
      <button-admin class="btn-delete">Удалить категорию</button-admin>
    </form>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import adminInput from "../components/admin/admin-input.vue";
import buttonAdmin from "../components/admin/button-admin.vue";
import buttonAdminCancel from "../components/admin/button-admin-cancel.vue";
import Axios from "axios";


export default {
  name: "EditingCategory",
  components: {
    classTitle,
    adminInput,
    buttonAdmin,
    buttonAdminCancel,
  },
  data() {
    return {
      name: '',
      imageFile: null,
      section: [],
    }
  },
  methods: {
    addImage() {
      let bodyFormData = new FormData();
      bodyFormData.append('image', this.input.files[0]);
      Axios.post('/upload-picture/section/', bodyFormData)
          .then(response => {
            if(response.data._status){
            }
          })
          .catch(e => console.error(e));
    },
    onSubmit() {
      Axios.post('/edit-section', {
        token: localStorage.getItem('token'),
        section_id: this.section.id,
        new_section_name: this.name,
      })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => console.error(e));
    },
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
.btn-delete:hover{
  background: #006200;
}



.flex{
  display: flex;
  margin-bottom: 50px;
}
.btn_back{
  border: 1px solid rgba(224, 224, 224, 1);
  display: inline-block;
  border-radius: 4px;
}
.bx-chevron-left{
  font-size: 24px;
  margin: 10px;
  color: black;
}
.btn_back:hover{
  background: #dadada;
}
.title{
  margin-left: 20px;
  line-height: 46px;
  font-weight: 400;
  font-size: 25px;
}
</style>