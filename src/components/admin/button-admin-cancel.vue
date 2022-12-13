<template>
  <button :disabled="disabled"
  ><slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-admin-cancel",
  props: {
    disabled: {
      type: Boolean,
      default: null,
    },
    type: {
      default: 'button',
    }
  },
}
</script>

<style scoped>
button{
  width: 100%;
  background: #FFFFFF;
  color: #832543;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
button:hover{
  background: #fdeded;
  transition-duration: 0.2s;
}
button:disabled{
  background: #868686;
}
</style>