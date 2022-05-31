<template>  
  <div class="gallery my-5 my-lg-10">
    <div class="gallery__title container d-flex justify-space-between align-center mb-5 mb-lg-10">
      <h3 class="text-h4 text-lg-h3 text-left font-weight-bold">Фотогалерея</h3>
      <div class="mt-lg-5">
        <v-btn class="gallery__prev" icon><v-icon size="50">mdi-chevron-left</v-icon></v-btn>
        <v-btn class="gallery__next" icon><v-icon size="50">mdi-chevron-right</v-icon></v-btn>
</div>
    </div>
    <swiper :grid="{ rows: 2, fill: 'row' }"
            slidesPerView="auto"
            :spaceBetween="30"
            :FreeMode="true"
            :navigation="{
              nextEl: '.gallery__next',
              prevEl: '.gallery__prev',
            }"
            :modules="modules"
            class="swiper">
      <swiper-slide v-for="item in items"
                    :key="item">
        <div class="swiper-zoom-container">
          <img alt="photo"
               :src="require(`@/assets/gallery/${ item }.jpg`)" />
        </div>
</swiper-slide>
    </swiper>
  </div>  
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Grid, Navigation } from 'swiper';
  import 'swiper/scss';
  import 'swiper/scss/grid';
  import 'swiper/scss/navigation';


  export default {
    name: 'GalleryCarousel',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        items: 38
      };
    },
    setup() {
      return {
        modules: [ Grid, Navigation ]
      };
    },
    methods: {
      next() {
        document.querySelector('.gallery__items').scrollLeft += window.innerWidth;
      },
      prev() {
        document.querySelector('.gallery__items').scrollLeft -= window.innerWidth;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gallery {
    .v-btn {
      box-shadow: none;
    }

    .swiper-slide {
      width: 300px;

      @media screen and (max-width: 1264px) {
        & {
          width: 200px;
        }
      }
    }

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      transition: all ease-in-out .4s;

      @media screen and (max-width: 1264px) {
        & {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
</style>
