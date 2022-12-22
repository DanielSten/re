<template>
  <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';
import {mapActions} from "vuex";


export default {
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    ...mapActions(['loadData'])
  },
  mounted() {
    this.loadData()
  },
}
</script>


<style scoped>

</style>
