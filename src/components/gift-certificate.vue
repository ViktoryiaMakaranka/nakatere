<template>
  <div class="certificate my-10">
    <div class="certificate__image"></div>
    <div class="certificate__content container">
      <div class="certificate__content-wrapper text-body-1">
        <h3 class="text-h3 font-weight-bold mb-15">Подарочный сертификат</h3>
        <div>Сделайте необычный сюрприз другу, любимому человеку или родителям. Вы можете оформить незабываемый подарок как на прогулку на катере с капитаном, так и на самостоятельное катание без капитана.</div>
        <div class="mt-5 certificate__actions font-weight-bold text-white">
          <div class="mt-10">
            <v-btn color="#f9a900" size="x-large"><router-link to="/about">Оформить сертификат</router-link></v-btn>
          </div>
          <div class="mt-5">
            <v-btn color="#f9a900" size="x-large"><router-link to="/about">Активировать сертификат</router-link></v-btn>
          </div>
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
    @include layout(60, '@/assets/certificate.png', left, contain);
  }
</style>
