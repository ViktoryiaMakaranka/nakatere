<template>
  <div class="youtube-video my-10">
    <h3 class="text-h3 font-weight-bold text-center py-10">{{ title }}</h3>
    <iframe class="youtube-video__item" :src="videoUrl" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
    name: 'YoutubeVideo',
    props: {
      videoUrl: String,
      title: String
    }
}</script>

<style lang="scss" scoped>
  .youtube-video {
    &__item {
      width: 100%;
      aspect-ratio: 16/9;
      border: none;
    }
  }
</style>
