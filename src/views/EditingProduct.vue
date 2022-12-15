<template>
  <div class="wrapper">
    <div class="flex">
      <RouterLink to="/moder-product"><div class="btn_back"><i class='bx bx-chevron-left'></i></div></RouterLink>
      <div class="title">Изменение товара</div>
    </div>
    <form ref="form" action="">
      <input type="file" ref="input" @change="showImagePreview($event)" style="display: none">
      <div class="block_image_product" @click="$refs.input.click()"></div>
      <admin-input
          required="required"
          title="Название товара"
          subtitle="Введите наименование товара"
      ></admin-input>
      <admin-input
          required="required"
          title="450"
          subtitle="Введите стоимость товара (руб)"
      ></admin-input>
      <admin-input
          required="required"
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

  },
  data() {
    return {
      imageFile: null,
      input: null,
    }
  },
  methods: {
    showImagePreview(event) {
      this.input = event.target;
      if (this.input.files && this.input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.imageFile = e.target.result;
        };
        reader.readAsDataURL(this.input.files[0]);
      }
    },
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