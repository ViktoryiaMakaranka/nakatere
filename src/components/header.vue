<template>
  <header class="header__wrapper text-center text-white">
    <div class="header__left" />
    <div class="header__right" />
    <div class="header__content d-flex container">
      <div class="header__content--left align-centerpr-8">
        <div class="header__logo">
          <a class="d-flex align-center text-decoration-none" href="https://nakatere.spb.ru/">
            <img alt="https://nakatere.spb.ru" :src="require('@/assets/logo.svg')">
            <span class="pb-2 text-h4">nakatere.spb.ru</span>
          </a>
        </div>
        <div class="header__info">
          <div class="header__info-icon mb-5">
            <v-icon color="#f9a900" size="300px">mdi-anchor</v-icon>
          </div>
          <h1 class="text-capitalize text-center text-h3 pb-5">{{ title }}</h1>
          <div class="header__info-wave" />
          <p class="text-body-1 mr-3 mb-10">{{ description }}</p>
        </div>
      </div>
      <div class="header__content--right mb-10 d-flex justify-space-between flex-column">
        <div class="header__top-actions d-flex justify-end text-h3 align-center">
          <a href=”tel:+78124674551”>+7 (812) 467-45-51</a>
          <HamburgerMenu />
        </div>
        <div class="header__bottom-actions">
          <v-btn class="mt-10 font-weight-bold" color="#f9a900" size="x-large" v-for="({ linkText, linkUrl }) in links" :key="linkText">
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
      margin-top: 100px;

      &-wave {
        background-image: url('@/assets/wave.svg');
        background-size: cover;
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

    &__bottom-actions {
      .v-btn:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
</style>
