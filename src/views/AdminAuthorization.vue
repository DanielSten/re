<template>
  <div>
    <admin-authorization></admin-authorization>
  </div>
</template>

<script>
import adminAuthorization from "../components/admin/admin-authorization.vue";

export default {
  name: "AdminPage",
  components: {
    adminAuthorization,

  },
}
</script>

<style scoped>

</style>