<template>
  <div>
    <a :style="buttonBackground" :class="{active: isActive, 'tab-btn':true, 'greyed-out': isGreyedOut}" @click="$emit('tabSelected')">
      <h4 class="title">{{ tab.name }}</h4>
    </a>
    <div class="tab_body" v-show="isActive">
      <card-list :products="tab.goods"></card-list>
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
        background: 'url(\''+ this.tab.background +'\') center/100% auto no-repeat',
      }
    }
  },
  props: {
    goods: [],
    isActive: false,
    isGreyedOut: false,
    tab: {
      id: '1',
      title: 'Свинина',
      src: '',
    },
  },
  methods: {
  },
}
</script>

<style scoped>
*{
  border: 0px;
}
a{
  display: block;
  width: 100%;
  height: 15vh;
  transition: .4s linear;
}
.title{
  font-size: 24px;
  text-align: center;
  line-height: 15vh;
  color: #efefef;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-shadow: #000000 0 1px 10px, #000000 0 1px 16px, #000000 0 1px 28px;
}
img{
  width: 100px;
  height: 100px;
}

.tab_body{
  padding-top: 15px;
}
.tab-btn {
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
  filter: saturate(90%);
}
.greyed-out {
  filter: saturate(70%);
}
.active {
  filter: saturate(100%);
}
</style>