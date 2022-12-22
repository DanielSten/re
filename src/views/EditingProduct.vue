<template>
  <div class="wrapper">
    <div class="flex">
      <a href="/moder-product" @click.prevent="onCancel"><div class="btn_back"><i class='bx bx-chevron-left'></i></div></a>
      <div class="title">Изменение товара</div>
    </div>
    <form ref="form" action="" @submit.prevent="onSubmit">
      <input type="file" ref="input" @change="showImagePreview($event)" style="display: none" accept="image/*">
      <div class="block_image_product" @click="$refs.input.click()" :style="{ 'background-image': 'url(' + good.photo + ')' }"></div>
      <admin-input
          required="required"
          v-model="good.name"
          title="Название товара"
          subtitle="Введите наименование товара"
      ></admin-input>
      <admin-input
          required="required"
          v-model="good.cost"
          title="Стоимость в рублях"
          subtitle="Введите стоимость товара (руб)"
      ></admin-input>
      <admin-input
          required="required"
          v-model="good.amount"
          title="Вес или количество"
          subtitle="Укажите вес или количество"
      ></admin-input>
      <drop-down-list
          v-model="good.section_id"
          required="required"
          name="password"
          subtitle="Выберите категорию, в которой будет отображаться товар"
      ></drop-down-list>
      <button-admin type="submit">Сохранить</button-admin>
      <button-admin-cancel class="btn-cancel" @click="onCancel">Отменить изменения</button-admin-cancel>
      <button-admin type="button" class="btn-delete" @click="onDelete">Удалить товар <i class='bx bxs-trash' ></i></button-admin>
    </form>
  </div>
</template>

<script>
import classTitle from "../components/admin/class-title.vue";
import adminInput from "../components/admin/admin-input.vue";
import buttonAdmin from "../components/admin/button-admin.vue";
import buttonAdminCancel from "../components/admin/button-admin-cancel.vue";
import dropDownList from "../components/admin/drop-down-list.vue";
import {mapActions} from "vuex";
import Axios from "axios";
import router from "../router";







export default {
  name: "EditingProduct",
  components: {
    classTitle,
    adminInput,
    buttonAdmin,
    buttonAdminCancel,
    dropDownList,

  },
  data() {
    return {
      good: {

      },
    }
  },
  methods: {
    ...mapActions(['getProductById', 'loadData']),

    onSubmit() {
      Axios.post('/edit-product', {
        token: localStorage.getItem('token'),
        product_id: this.good.id,
        product_name: this.good.name,
        amount: this.good.amount,
        cost: this.good.cost,
        section_id: this.good.section_id,
      })
          .then(response => {
            if (response.data._status) {
              this.loadData()
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
        Axios.post('/upload-picture/product/' + this.good.id, data)
            .then(async (response) => {
              await this.loadData()
              this.good = await this.getProductById(this.$route.params.id)
            })
            .catch(function (response) {
              console.error(response)
            });
      }
    },
    onCancel() {
      this.loadData()
      this.$router.push('/moder-product')
    },
    onDelete() {
      Axios.post('/delete-product', {
        token: localStorage.getItem('token'),
        product_id: this.good.id,
      })
          .then(response => {
            if (response.data._status) {
              this.loadData()
              this.$router.push('/moder-product')
            }
          })
          .catch(e => console.error(e));
    },
  },
  async mounted() {
    this.good = await this.getProductById(this.$route.params.id)
    if (!this.good.id) {
      this.$router.push('/moder-product')
    }
  }
}
</script>

<style scoped>

.wrapper{
  padding: 30px;
}
.block_image_product{
  height: 30vh;
  background: grey;
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