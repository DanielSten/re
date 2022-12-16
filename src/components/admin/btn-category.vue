<template>
  <a @click="getInfo" href="/moder-category-editing">
    <div class="flex">
      <div class="category_name">{{ sections.name }}</div>
      <div class="category_delete"><i class='bx bx-x' ></i></div>
    </div>
  </a>
</template>

<script>
import Axios from "axios";

export default {
  name: "btn-category",
  data() {
    return {
      sections: [],
    }
  },
  methods: {
    getInfo () {
      Axios.get('/all-info')
          .then(response => {
            this.sections = response.data.sections;
          })
          .catch(e => console.error(e));
    }
  },

}
</script>

<style scoped>
.flex{
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 4px;
  display: flex;
  justify-content:space-between;
  margin-bottom: 16px;
  color: #000000;
}


.category_name{
  font-weight: 400;
  font-size: 16px;
  margin: 16px;
}

.category_delete{
  height: 24px;
  margin: 16px 12px;
}
.bx-x{
  font-size: 24px;
}
</style>