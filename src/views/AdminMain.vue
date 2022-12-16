<template>
  <div class="wrapper">
    <div class="title">Управление сайтом</div>
    <RouterLink to="/moder-category"><class-name>Категории</class-name></RouterLink>
    <RouterLink to="/moder-product"><class-name>Товары</class-name></RouterLink>
    <RouterLink to="/moder-other"><class-name>Прочие настройки</class-name></RouterLink>
  </div>
</template>

<script>
import className from "../components/admin/class-name.vue";
import Axios from "axios";



export default {
  name: "AdminMain",
  components: {
    className,
  },
  data() {
    return {
      settings: {},
      sections: [],
    }
  },
}
</script>

<style scoped>

.wrapper{
  padding: 30px;
}
.title{
  font-weight: 400;
  font-size: 25px;
  line-height: 36px;
  margin-bottom: 50px;
}
</style>