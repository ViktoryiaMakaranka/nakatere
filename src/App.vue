<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  @font-face {
    font-family: 'Exo2';
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    unicode-range: U+000-5FF;
    src: local('Exo2'), url('@/fonts/exo2/exo2.woff2') format('woff2'), url('@/fonts/exo2/exo2.woff') format('woff');
  }

  $body-font-family: 'Exo2', sans-serif;

  .v-application {
    .text-h1,
    .text-h2,
    .text-h3,
    .text-h4,
    .text-h5,
    .text-h6,
    .text-headline,
    .text-title,
    .text-subtitle-1,
    .text-subtitle-2,
    .text-body-1,
    .text-body-2,
    .text-button,
    .text-caption,
    .text-overline {
      font-family: $body-font-family !important;
    }
  }

  * {
    font-family: $body-font-family;
    scroll-behavior: smooth;
  }

  a, a:visited {
    color: inherit;
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 30px;
    overflow: hidden;


    @media screen and (max-width: 1264px) {
      & {
        padding: 15px;
      }
    }
  }

  .v-card {
    box-shadow:none;

    &-title, &-subtitle {
      opacity: 1;
    }
  }
</style>
