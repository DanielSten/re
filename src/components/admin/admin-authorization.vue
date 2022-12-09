<template>
  <div class="wrapper">
    <form ref="form" action="">
      <admin-input
          v-model="email"
          type='email'
          required="required"
          name="email"
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
      email: '',
      password: '',
      rememberMe: true,
    }
  },
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