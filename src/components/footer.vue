<template>
  <footer class="footer mt-10 text-white">
    <div class="footer__top-bg"></div>
    <div class="footer__content">
      <div class="footer__content-wrapper container">
        <div class="footer__booking d-flex flex-column flex-lg-row align-center justify-space-between">
          <div class="d-flex align-center mb-5 mb-lg-0">
            <img alt="https://nakatere.spb.ru" :src="require('@/assets/logo.svg')">
            <span class="pb-2 text-h5 text-lg-h4">nakatere.spb.ru</span>
          </div>          
          <v-btn color="#fcb813" :size="$vuetify.display.lgAndUp ? 'x-large' : 'large'"><router-link to="/about">Забронировать онлайн</router-link></v-btn>
        </div>
        <div class="footer__sections text-center text-lg-left text-body-2 text-lg-body-1 my-5 my-lg-10">
          <div class="footer__section">
            <div class="d-flex mb-5 mt-4 justify-center justify-lg-start align-center">
              <a href="https://vk.com/nakaterevspb" rel="nofollow" target="_blank"><v-icon class="mr-3" color="#ffffff">fab fa-vk</v-icon></a>
              <a href="https://api.whatsapp.com/send/?phone=79062769090&text=C+сайта+nakatere.spb.ru" rel="nofollow" target="_blank"><v-icon class="mr-3" color="#ffffff">fab fa-whatsapp</v-icon></a>
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
            <div>ул. Академика Павлова 11 А,</div>
            <div><v-icon color="#ffffff">mdi-subway</v-icon> Петроградская</div>
          </div>
          <div class="footer__section">
            <div class="text-h5 text-lg-h4 font-weight-bold mb-5">Услуги:</div>
            <div>Аренда катера с капитаном</div>
            <div>Аренда катера без капитана</div>
            <div>Экскурсии</div>
            <div>Развод мостов</div>
            <div>Туры</div>
          </div>
          <div class="footer__section">
            <div class="text-h5 text-lg-h4 font-weight-bold mb-5">Наш флот:</div>
            <div>Катер Шустрый</div>
            <div>Катер Толстый</div>
            <div>Катер Стремительный</div>
            <div>Яхта Вольяжная</div>
          </div>
          <div class="footer__section">
            <div class="text-h5 text-lg-h4 font-weight-bold mb-5">Прочее:</div>
            <div>Условия переноса и отмены заказа</div>
            <div>Условия аренды</div>
            <div>Как забронировать катание</div>
            <div>Подарочный сертификат</div>
            <div>Публичная оферта</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import '@fortawesome/fontawesome-free/js/all.js'
  import '@fortawesome/fontawesome-free/css/all.css'

  export default {
    name: 'FooterComponent'
  }
</script>

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
