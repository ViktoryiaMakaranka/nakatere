<template>
  <v-lazy>
    <div class="info-blocks text-center my-5 my-lg-10" :style="{ gridTemplateColumns: $vuetify.display.lgAndUp ? `repeat(${ columns }, 1fr)` : '1fr' }">
      <v-card v-for="({ text, icon, title }, index) in items"
              :key="index">
        <div class="d-flex flex-lg-column align-center">
          <v-icon color="#288ed7" :size="$vuetify.display.lgAndUp ? '100px' : '70px'">{{ icon }}</v-icon>
          <v-card-title class="text-h5 font-weight-bold d-flex justify-lg-center text-left text-lg-center">{{ title }}</v-card-title>
        </div>        
        <v-card-text class="text-justify">{{ text }}</v-card-text>
      </v-card>
    </div>
  </v-lazy>  
</template>

<script>
export default {
    name: 'InfoBlocks',
    props: {
      columns: {
        type: Number,
        default: 4
      },
      items: Array
    }
}</script>

<style lang="scss" scoped>
  .info-blocks {
    display: grid;
    gap: 30px;
    grid-auto-rows: auto;

    @media screen and (max-width: 1264px) {
      & {
        gap: 15px;
      }
    }

    .v-card {
      box-shadow: none;

      &-title {
        flex: 1;
      }
    }
  }
</style>
