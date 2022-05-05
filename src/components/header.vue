<template>
  <header class="header__wrapper text-center text-white">
    <div class="header__left" />
    <div class="header__right d-none d-lg-block" />
    <div class="header__content d-flex flex-column flex-lg-row">
      <div class="header__content--left align-center">
        <div class="header__logo container">
          <div class="d-flex justify-space-between">
            <a class="d-flex align-center text-decoration-none" href="https://nakatere.spb.ru/">
              <img alt="https://nakatere.spb.ru" :src="require('@/assets/logo.svg')">
              <span class="pb-2 text-h5 text-lg-h4 d-none d-lg-inline">nakatere.spb.ru</span>
            </a>
            <div class="d-flex align-center d-lg-none text-h6 text-right pl-3">
              <a href=”tel:+78124674551”>+7 (812) 467-45-51</a>
              <HamburgerMenu class="pl-2" />
            </div>            
          </div>          
        </div>
        <div class="header__info mt-lg-5">
          <div class="header__info-wrapper d-flex d-lg-block">
            <div class="header__info-content container pb-lg-0">
              <div class="header__info-icon mb-lg-5">
                <img alt="anchor" :src="require('@/assets/anchor.svg')">
              </div>
              <h1 class="text-capitalize text-center text-h5 text-lg-h3 pb-5">{{ title }}</h1>
              <div class="header__info-wave" />
              <img class="header__info-wave" alt="wave" :src="require('@/assets/wave.svg')">
              <div class="header__bottom-actions mt-3 d-lg-none">
                <v-btn class="mb-5" color="#fcb813" size="default" v-for="({ linkText, linkUrl }) in links" :key="linkText">
                  <router-link :to="linkUrl">{{ linkText }}</router-link>
                </v-btn>
              </div>
            </div>
            <img class="d-lg-none header__info-image" alt="nakatere" :src="bgImageUrl">
          </div>          
          <p class="text-body-1 mr-3 mb-lg-10 text-justify pt-5 pt-lg-0 container">{{ description }}</p>
        </div>
      </div>
      <div class="header__content--right mb-10 d-none d-lg-flex justify-space-between flex-column container">
        <div class="header__top-actions d-none d-lg-flex justify-end text-h4 align-center">
          <a href=”tel:+78124674551”>+7 (812) 467-45-51</a>
          <HamburgerMenu />
        </div>
        <div class="header__bottom-actions d-none d-lg-block">
          <v-btn class="mt-10 mx-3" color="#fcb813" size="x-large" v-for="({ linkText, linkUrl }) in links" :key="linkText">
            <router-link :to="linkUrl">{{ linkText }}</router-link>
          </v-btn>
        </div>
      </div>
    </div>
  </header>  
</template>

<script>
  import HamburgerMenu from '@/components/menu.vue'

  export default {
    name: 'HeaderComponent',
    components: {
      HamburgerMenu
    },
    props: {
      bgImageUrl: String,
      title: String,
      description: String,
      links: Array()
    },
    computed: {
      bgCssProperty() {
        return `url('${ this.bgImageUrl }')`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    &__wrapper {
      display: grid;
      grid-template-columns: max(410px, 35%, calc((100% - 1440px) / 2 + 1440px / 3 + 30px)) auto;

      @media screen and (max-width: 1264px) {
        & {
          grid-template-columns: 1fr;
        }
      }
    }

    &__logo {
      a {
        img {
          width: 100px;
        }
      }
    }

    &__left {
      grid-row-start: 1;
      grid-column-end: 2;
      background: #283542;
    }

    &__right {
      grid-row-start: 1;
      grid-column-start: 2;
      background-image: v-bind(bgCssProperty);
      background-size: cover;
    }

    &__content {
      grid-row-start: 1;
      grid-column-start: 1;
      grid-column-end: 3;
      z-index: 2;
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;

      &--left {
        width: 35%;

        @media screen and (max-width: 1264px) {
          & {
            width: 100%;
          }
        }
      }

      &--right {
        width: 65%;

        @media screen and (max-width: 1264px) {
          & {
            width: 100%;
          }
        }
      }
    }

    &__info {
      &-wave {
        width: 100%;
        transform: scaleY(75%);

        @media screen and (max-width: 1264px) {
          & {
            transform: scaleY(100%);
          }
        }
      }

      &-icon {
        img {
          width: 280px;

          @media screen and (max-width: 1264px) {
            & {
              width: 100px;
            }
          }
        }
      }

      &-content {
        width: 100%;
      }

      &-image {
        width: 50%;
        object-fit: cover;
      }
    }

    &__bottom-actions .v-btn {
      overflow-wrap: break-word;
      white-space: normal;
      padding: 5px;
    }
  }
</style>
