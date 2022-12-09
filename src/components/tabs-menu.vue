<template>
  <div>
    <tab-btn v-for="tab in tabs" :tab="tab" :isActive="tabActive == tab.id" @tabSelected="tabActive = tab.id"></tab-btn>
  </div>
</template>

<script>
import tabBtn from "./button/tab-btn.vue";

export default {
  name: "tabs-menu",
  components: {
    tabBtn,

  },
  data() {
    return{
      tabActive: 0,
      tabs: [
        {
          id: 1,
          title: "Готовый шашлык",
          src: '/icons/cow.jpg',
        },
        {
          id: 2,
          title: "Свинина",
          src: '/icons/pig.jpg',
        },
        {
          id: 3,
          title: "Курица",
        },
        {
          id: 4,
          title: "Говядина",
        },

      ]
    }
  },
}
</script>

<style scoped>

</style>