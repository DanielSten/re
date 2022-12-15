<template>
  <div class="wrapper">
    <form @submit.prevent="onSubmit" ref="form">
      <admin-input
          v-model="name"
          required="required"
          title="Логин"
          subtitle="Введите логин"
      ></admin-input>
      <admin-input
          v-model="password"
          type='password'
          required="required"
          name="password"
          title="Пароль"
          subtitle="Введите пароль"
      ></admin-input>
      <button-admin>войти в аккаунт</button-admin>
    </form>
  </div>
</template>

<script>
import adminInput from "./admin-input.vue";
import buttonAdmin from "./button-admin.vue";
import Axios from "axios";


export default {
  name: "admin-authorization",
  components: {
    adminInput,
    buttonAdmin
  },
  data() {
    return{
      passType: 'password',
      passwordHasError: false,
      emailHasError: false,
      name: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      Axios.post('/auth', {
        name: this.name,
        password: this.password,
      })
          .then(response => {
            if(response.data._status){
              this.$router.push('/moder-main');
              localStorage.setItem('token', response.data.token)
            } else {
              this.passwordHasError = true
            }
          })
          .catch(e => console.error(e));
    },
  }
}
</script>

<style scoped>
.wrapper{
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>