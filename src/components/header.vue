<template>
  <header class="header__wrapper text-center text-white">
    <div class="header__left" />
    <div class="header__right d-none d-lg-block" />
    <div class="header__content d-flex flex-column flex-lg-row container">
      <div class="header__content--left align-center pr-lg-8">
        <div class="header__logo pb-lg-16">
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
        <div class="header__info mt-10 mt-lg-16">
          <div class="header__info-icon mb-5">
            <v-icon color="#f9a900" :size="$vuetify.display.lgAndUp ? '300px' : '100px'">mdi-anchor</v-icon>
          </div>
          <h1 class="text-capitalize text-center text-h4 text-lg-h3 pb-5">{{ title }}</h1>
          <div class="header__info-wave" :style="{ backgroundSize: $vuetify.display.lgAndUp ? 'cover' : 'contain' }"/>
          <p class="text-body-1 mr-3 mb-lg-10">{{ description }}</p>
        </div>
      </div>
      <div class="header__content--right mb-10 d-flex justify-space-between flex-column">
        <div class="header__top-actions d-none d-lg-flex justify-end text-h3 align-center">
          <a href=”tel:+78124674551”>+7 (812) 467-45-51</a>
          <HamburgerMenu />
        </div>
        <div class="header__bottom-actions">
          <v-btn class="mt-10 mx-3 font-weight-bold" color="#f9a900" :size="$vuetify.display.lgAndUp ? 'x-large' : 'large'" v-for="({ linkText, linkUrl }) in links" :key="linkText">
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
      grid-template-columns: max(410px, 33.3%, calc((100% - 1440px) / 2 + 1440px / 3 + 30px)) auto;

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

      &--left {
        flex: 1;
      }

      &--right {
        flex: 2;
      }
    }

    &__info {
      &-wave {
        background-image: url('@/assets/wave.svg');
        height: 150px;
        background-position: center;
        margin-top: -50px;
      }

      &-icon {
        svg {
          height: 300px;
        }
      }
    }
  }
</style>
