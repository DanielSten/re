<template>
  <div>
    <div class="wrapper">
      <div class="contact_title">Контакты</div>
      <a href="tel:+7 (964) 513-97-27" class="contact_number">+7 (964) 513-97-27</a>
      <div class="contact_mail">shash@mail</div>
      <div class="contact_address">Московская область, г. Красногорск, ул. Ново-Никольская, 40</div>
      <div class="contact_time">Пн-Вс: 10:00-21:00</div>
    </div>
    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/10735/krasnogorsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Красногорск</a><a href="https://yandex.ru/maps/10735/krasnogorsk/house/novo_nikolskaya_ulitsa_40/Z04YdAJlTkAPQFtvfXRyeH9nYQ==/?azimuth=6.12365130523948&ll=37.256544%2C55.838990&utm_medium=mapframe&utm_source=maps&z=17.6" style="color:#eee;font-size:12px;position:absolute;top:14px;">Ново-Никольская улица, 40 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUjnQvt1A" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
  </div>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped>
.wrapper{
  background-color: #1c0f08;
  color: white;
  font-size: 18px;
  padding: 40px;
}


.contact_title{
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 40px;
}
.contact_mail, .contact_address, .contact_time{
  margin-top: 40px;
}
.contact_number{
  height: 50px;
  display: block;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto',Arial,sans-serif;
  line-height: 44px;
  font-weight: 700;
  border-width: 3px;
  border-radius: 50px;
  background-position: center center;
  border-color: #ffffff;
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}
.contact_number:hover, .contact_number:active{
  background-color: #ffffff;
  color: #1c0f08;
}
</style>