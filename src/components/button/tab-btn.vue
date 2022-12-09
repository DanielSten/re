<template>
  <div>
    <button :style="buttonBackground" :class="{active: isTabActive(this.tabActive)}" @click="$emit('tabSelected')">
      <span class="title">{{ tab.title }}</span>
    </button>
    <div class="tab_body" v-show="isActive">
      <card-list></card-list>
    </div>
  </div>
</template>

<script>
import cardList from "../card-list.vue";


export default {
  name: "tab-btn",
  components: {
    cardList,
  },
  data() {
    return{
      tabActive: 0,
    }
  },
  computed: {
    buttonBackground() {
      return {
        background: 'url(\''+ this.tab.src +'\') 0 0/100% auto no-repeat',
      }
    }
  },
  props: {
    isActive: false,
    tab: {
      id: '1',
      title: 'Свинина',
      src: '',
    },
  },
  methods: {
    isTabActive(num){
      return this.tabActive === num;
    },
  },
}
</script>

<style scoped>
*{
  border: 0px;
}
button{
  width: 100%;
  height: 10vh;
  transition: .4s linear;
}
.title{
  font-size: 20px;
  color: #efefef;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-shadow: #000000 0 1px 10px;
}
img{
  width: 100px;
  height: 100px;
}

.tab_body{
  padding-top: 15px;
}
</style>