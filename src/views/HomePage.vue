<template>
  <div>
    <header-home-page></header-home-page>
    <tabs-menu></tabs-menu>
    <contact></contact>
    <btn-call></btn-call>
    <footer-page></footer-page>
  </div>
</template>

<script>
import headerHomePage from "../components/header-home-page.vue";
import tabsMenu from "../components/tabs-menu.vue";
import contact from "../components/contact.vue";
import btnCall from "../components/button/btn-call.vue";
import footerPage from "../components/footer-page.vue";



export default {
  name: "home-page",
  components: {
    headerHomePage,
    tabsMenu,
    contact,
    btnCall,
    footerPage
  },
}
</script>

<style scoped>
</style>