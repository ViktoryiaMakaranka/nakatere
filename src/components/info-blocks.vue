<template>
  <v-lazy>
    <div class="info-blocks text-center my-10" :style="{ gridTemplateColumns: `repeat(${ columns }, 1fr)` }">
      <v-card v-for="({ text, icon, title }, index) in items"
              :key="index">
        <v-icon color="#288ed7" size="100px">{{ icon }}</v-icon>
        <v-card-title class="text-h5 font-weight-bold d-flex justify-center">{{ title }}</v-card-title>
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

    .v-card {
      box-shadow: none;
    }
  }
</style>
