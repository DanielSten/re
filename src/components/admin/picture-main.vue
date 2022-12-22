<template>
  <div class="block_wrapper">
    <div class="title">Изображение на главной странице</div>
    <input type="file" ref="input" @change="showImagePreview($event)" style="display: none" accept="image/*">
    <div class="block_image" @click="$refs.input.click()" :style="{ 'background-image': 'url(' + getSettings.main_image + ')' }"></div>
  </div>
</template>

<script>
import Axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "picture-main",

  methods: {
    ...mapActions(['loadData']),
      showImagePreview(event) {
        this.input = event.target;
        if (this.input.files && this.input.files[0]) {
          let data = new FormData();
          data.append('token', localStorage.getItem('token'));
          data.append('picture', this.input.files[0]);
          Axios.post('/upload-picture/main-page', data)
              .then(async (response) => {
                await this.loadData()
              })
              .catch(function (response) {
                console.error(response)
              });
        }
      },
  },
  computed: {
    ...mapGetters(['getSettings'])
  }
}
</script>

<style scoped>
.block_wrapper{
  margin-bottom: 30px;
}


.title{
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.018em;
  margin-bottom: 25px;
}

.block_image{
  height: 200px;
  background: grey;
  background-position: center;
  background-size: contain ;
  background-repeat: no-repeat;
}
</style>