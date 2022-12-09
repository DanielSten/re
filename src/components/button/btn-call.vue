<template>
  <div class="wrapper_up wrapper_hide">
    <i class='bx bxs-phone-call'></i>
  </div>
</template>

<script>
export default {
  name: "btn-call"
}
</script>

<style scoped>
.wrapper_up{
  position: fixed;
  background-color: #1c0f08;
  font-size: 28px;
  color: #ffffff;
  border: 3px solid #ffffff;
  right: 15px;
  bottom: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 1000px;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;
  opacity: 1;
  transform: translateY(0);
}
.wrapper_hide {
  display: none;
}

.btn-up_hiding {
  opacity: 0;
  transform: translateY(100px);
}
.wrapper_up:hover, .wrapper_up:active{
  background-color: #ffffff;
  color: #1c0f08;
}
</style>