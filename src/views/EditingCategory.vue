<template>
  <div class="wrapper">
    <div class="flex">
      <RouterLink to="/moder-category"><div class="btn_back"><i class='bx bx-chevron-left'></i></div></RouterLink>
      <div class="title">Изменение категории</div>
    </div>
    <form ref="form" @submit.prevent="onSubmit">
      <input type="file" ref="input" style="display: none" @change="showImagePreview($event)" accept="image/*">
      <div class="block_image_product" @click="$refs.input.click()" :style="{ 'background-image': 'url(' + section.background + ')' }"></div>
      <admin-input
          required="required"
          v-model="section.name"
          title="Название категории"
          subtitle="Введите наименование категории"
      ></admin-input>
      <button-admin type="submit">Сохранить</button-admin>
      <button-admin-cancel class="btn-cancel" @click="onCancel">Отменить изменения</button-admin-cancel>
      <button-admin class="btn-delete" @click="onDelete">Удалить категорию <i class='bx bxs-trash' ></i></button-admin>
    </form>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import adminInput from "../components/admin/admin-input.vue";
import buttonAdmin from "../components/admin/button-admin.vue";
import buttonAdminCancel from "../components/admin/button-admin-cancel.vue";
import Axios from "axios";
import {mapActions} from "vuex";



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
      background: null,
      section: {},
    }
  },
  methods: {
    ...mapActions(['getCategoryById', 'loadData']),

    onSubmit() {
      Axios.post('/edit-section', {
        new_section_name: this.section.name,
        token: localStorage.getItem('token'),
        section_id: this.section.id
      })
          .then(response => {
            if (response.data._status) {
            }
          })
          .catch(e => console.error(e));
    },
    showImagePreview(event) {
      this.input = event.target;
      if (this.input.files && this.input.files[0]) {
        let data = new FormData();
        data.append('token', localStorage.getItem('token'));
        data.append('picture', this.input.files[0]);
        Axios.post('/upload-picture/section/' + this.section.id, data)
            .then(async (response) => {
              await this.loadData()
              this.section = await this.getCategoryById(this.$route.params.id)
            })
            .catch(function (response) {
              console.error(response)
            });
      }
    },
    onCancel() {
      this.loadData()
      this.$router.push('/moder-category')
    },
    onDelete() {
      Axios.post('/delete-section', {
        token: localStorage.getItem('token'),
        section_id: this.section.id,
      })
          .then(response => {
            if (response.data._status) {
              this.loadData()
              this.$router.push('/moder-category')
            }
          })
          .catch(e => console.error(e));
    },

  },
  async mounted() {
    this.section = await this.getCategoryById(this.$route.params.id)
    if (!this.section.id) {
      this.$router.push('/moder-category')
    }
  }
}
</script>

<style scoped>
.wrapper{
  padding: 30px;
}
.block_image_product{
  height: 200px;
  background-color: grey;
  margin-bottom: 30px;
  background-position: center;
  background-size: cover;
}


.btn-cancel{
  margin: 15px 0;
}
.btn-delete{
  background: rgba(176, 0, 32, 1)
}
.btn-delete:hover{
  background: rgb(199, 2, 37)
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