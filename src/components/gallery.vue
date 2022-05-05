<template>  
  <div class="gallery my-5 my-lg-10">
    <div class="gallery__title container d-flex justify-space-between align-center mb-5 mb-lg-10">
      <h3 class="text-h4 text-lg-h3 text-left font-weight-bold">Фотогалерея</h3>
      <div class="mt-lg-5">
        <v-btn size="x-small" icon @click="prev">
          <v-icon size="50">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn size="x-small" icon @click="next">
          <v-icon size="50">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="gallery__items py-5" @wheel="onScroll">
      <img v-for="item in items"
           :key="item"
           alt="photo"
           :src="require(`@/assets/gallery/${ item }.jpg`)">
    </div>
  </div>  
</template>

<script>
export default {
    name: 'GalleryCarousel',
    data() {
      return {
        items: 38
      };
    },
    methods: {
      next() {
        document.querySelector('.gallery__items').scrollLeft += window.innerWidth;
      },
      prev() {
        document.querySelector('.gallery__items').scrollLeft -= window.innerWidth;
      },
      onScroll(event) {
        event.preventDefault();

        document.querySelector('.gallery__items').scrollBy({
          left: event.deltaY < 0 ? -200 : 200
        });
      }
    }
}</script>

<style lang="scss" scoped>
  .gallery {
    .v-btn {
      box-shadow: none;
    }

    &__items {
      display: grid;
      grid-template-rows: 300px 300px;
      grid-gap: 20px;
      grid-auto-flow: column;
      overflow-y: auto;
      transition: all ease-in-out .4s;

      &::-webkit-scrollbar {
        display: none;
      }

      @media screen and (max-width: 1264px) {
        & {
          grid-template-rows: 200px 200px;
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

      &:hover {
        transform: scale(1.2);
      }
    }
  }
</style>
