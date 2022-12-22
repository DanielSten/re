<template>
  <h3 class="name">{{ getSettings.productsTitle }}</h3>
  <div class="tabs-holder">
    <tab-btn
        :ref="'tab-btn-id-' + tab.id"
        v-for="tab in getSections"
        :tab="tab"
        :isActive="tabActive == tab.id"
        :isGreyedOut="(tabActive != 0 && tabActive != tab.id)"
        @tabSelected="onTabClicked(tab.id)"
        class="tab"
    ></tab-btn>
  </div>
</template>

<script>
import tabBtn from "./button/tab-btn.vue";
import {mapGetters} from "vuex";

export default {
  name: "tabs-menu",
  components: {
    tabBtn,

  },
  data() {
    return{
      tabActive: 0,

    }
  },
  computed: {
    ...mapGetters(['getSections', 'getSettings'])
  },
  methods: {
    onTabClicked(tabId){
      if(this.tabActive == tabId){
        this.tabActive = 0;
      } else {
        this.tabActive = tabId;
        this.$nextTick(() => this.$refs['tab-btn-id-' + tabId][0].$el.scrollIntoView({ behavior: 'smooth' }));
      }
    }
  }
}
</script>

<style scoped>
.name{
  padding: 28px 0 14px;
  font-weight: 900;
  font-size: 32px;
  text-align: center;
  color: #1c0f08;
}
.tabs-holder {
  padding: 15px 0px 5px;
}
.tab {
  padding-bottom: 10px;
}
.title{
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 40px;
  color: #1c0f08;
}
</style>