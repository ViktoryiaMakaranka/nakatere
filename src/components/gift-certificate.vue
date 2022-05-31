<template>
  <div class="certificate my-5 my-lg-10">
    <div class="certificate__image"></div>
    <div class="certificate__content text-body-1">
      <h3 class="text-h4 text-lg-h3 text-center text-lg-left font-weight-bold mb-5 mb-lg-15">Подарочный сертификат</h3>
      <div class="text-body-2 text-lg-body-1 text-justify">
        <p>Идеальный подарок для каждого – это подарок впечатление. Для Вас и Ваших близких мы подготовили два вида подарочных сертификатов на любой вкус: для консерваторов -  прогулку на катере с капитаном, а для отважных и смелых – самостоятельное катание на катере без капитана.</p>
        <p class="mt-5">Подарите прогулку на персональном катере, яркие эмоции от которой запомниться на всю жизнь!</p>
        <p class="mt-5">Вы можете оформить сертификат на нашем сайте и моментально получить его на почту в формате pdf, а также заказать его доставку в стильном печатном исполнении.</p>
      </div>
      <div class="mt-lg-5 certificate__actions text-white text-center text-lg-left">
        <div class="mt-5 mt-lg-10">
          <v-btn color="#fcb813" :size="$vuetify.display.lgAndUp ? 'x-large' : 'large'"><router-link to="/about">Оформить сертификат</router-link></v-btn>
        </div>
        <div class="mt-5">
          <v-btn color="#fcb813" :size="$vuetify.display.lgAndUp ? 'x-large' : 'large'"><router-link to="/about">Активировать сертификат</router-link></v-btn>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
    name: 'GiftCertificate'
}</script>

<style lang="scss" scoped>
  @import "@/styles/mixin";

  .certificate {
    @include layout(40%, '@/assets/certificate.png', -reverse);
  }
</style>
