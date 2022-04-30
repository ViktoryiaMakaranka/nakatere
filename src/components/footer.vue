<template>
  <footer class="footer my-10 text-white">
    <div class="footer__top-bg"></div>
    <div class="footer__content">
      <div class="footer__content-wrapper container">
        <div class="footer__booking d-flex flex-column flex-lg-row align-center justify-space-between">
          <div class="d-flex align-center mb-5 mb-lg-0">
            <img alt="https://nakatere.spb.ru" :src="require('@/assets/logo.svg')">
            <span class="pb-2 text-h5 text-lg-h4">nakatere.spb.ru</span>
          </div>          
          <v-btn color="#f9a900" :size="$vuetify.display.lgAndUp ? 'x-large' : 'large'"><router-link to="/about">Забронировать онлайн</router-link></v-btn>
        </div>
        <div class="footer__sections text-center text-lg-left text-body-2 text-lg-body-1 my-5 my-lg-10">
          <div class="footer__section">
            <div class="d-flex mb-5 mt-4 justify-center justify-lg-start align-center">
              <v-icon class="mr-3" color="#ffffff">mdi-instagram</v-icon>
              <v-icon color="#ffffff">mdi-facebook</v-icon>
            </div>
            <div>
              <a href=”tel:+78124674551”>+7 (812) 467-45-51</a>
            </div>
            <div>
              <a href=”mailto:na-katere-offers@mail.ru”>na-katere-offers@mail.ru</a>
            </div>
            <div>Ежедневно с 9:00 до 23:00</div>
          </div>
          <div class="footer__section">
            <div class="text-h5 text-lg-h4 font-weight-bold mb-5">Адрес:</div>
            <div>Санкт-Петербург,</div>
            <div>Петровская коса 9 лит Б,</div>
            <div>Территория Речного</div>
            <div>яхт-клуба Профсоюзов</div>
            <div><v-icon color="#ffffff">mdi-subway</v-icon> Крестовский остров</div>
          </div>
          <div class="footer__section">
            <div class="text-h5 text-lg-h4 font-weight-bold mb-5">Услуги:</div>
            <div>Аренда катера с капитаном</div>
            <div>Аренда катера без капитана</div>
            <div>Экскурсии</div>
            <div>Развод мостов</div>
          </div>
          <div class="footer__section">
            <div class="text-h5 text-lg-h4 font-weight-bold mb-5">Наш флот:</div>
            <div>Катер Шустрый</div>
            <div>Катер Толстый</div>
            <div>Катер Стремительный</div>
          </div>
          <div class="footer__section">
            <div class="text-h5 text-lg-h4 font-weight-bold mb-5">Прочее:</div>
            <div>Подарочный сертификат</div>
            <div>Условия бронирования и отмены</div>
            <div>Публичная оферта</div>
            <div>Мы принимаем:</div>
            <div class="d-flex justify-center justify-lg-start align-center">
              <v-icon class="mr-3" color="#ffffff">mdi-credit-card-outline</v-icon>
              <span class="mr-3">МИР</span>
              <v-icon class="mr-3" color="#ffffff">mdi-cash-multiple</v-icon>
              <v-icon class="mr-3" color="#ffffff">mdi-purse</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}</script>

<style lang="scss" scoped>
  .footer {
    &__top-bg {
      height: 100px;
      background-image: url('@/assets/footer.png');
      background-repeat: repeat-x;
      background-size: contain;

      @media screen and (max-width: 1264px) {
        & {
          height: 40px;
        }
      }
    }

    &__booking {
      img {
        width: 200px;

        @media screen and (max-width: 1264px) {
          & {
            width: 100px;
          }
        }
      }
    }

    &__content {
      background: #283242;
    }

    &__sections {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 30px;

      @media screen and (max-width: 1264px) {
        & {
          grid-template-columns: 1fr;
          gap: 15px;
        }
      }
    }
  }
</style>
