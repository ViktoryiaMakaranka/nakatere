<template>
  <div class="nakatere">
    <Header v-bind="config.header" />
    <div class="container">
      <InfoBlocks v-bind="config.infoBlocks" />
      <YoutubeVideo v-bind="config.youtubeVideo" />
    </div>
    <FilteredCards v-bind="config.filteredCards" />
    <RoutesComponent />
    <GiftCertificate />
    <v-lazy>
      <GalleryCarousel />
    </v-lazy>    
    <InfoLines v-bind="config.infoLines" />
    <FooterComponent />
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  import InfoBlocks from '@/components/info-blocks.vue'
  import YoutubeVideo from '@/components/video.vue'
  import FilteredCards from '@/components/filtered-cards.vue'
  import RoutesComponent from '@/components/routes.vue'
  import GiftCertificate from '@/components/gift-certificate.vue'
  import GalleryCarousel from '@/components/gallery.vue'
  import InfoLines from '@/components/info-lines.vue'
  import FooterComponent from '@/components/footer.vue'

  import config from '@/config/main'

  export default {
    name: 'MainPage',
    components: {
      Header,
      InfoBlocks,
      YoutubeVideo,
      FilteredCards,
      RoutesComponent,
      GiftCertificate,
      GalleryCarousel,
      InfoLines,
      FooterComponent
    },
    data() {
      return {
        config
      }
    }
  }
</script>
