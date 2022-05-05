<template>
  <div class="filtered-cards my-5 my-lg-10">
    <div class="container">
      <h3 class="text-h4 text-lg-h3 text-center font-weight-bold">{{ title }}</h3>
    </div>
    <div class="filtered-cards__filters mb-5 pt-lg-10">
      <div class="container text-center">
        <v-chip class="ma-2"
                :active="isActiveTag(tag)"
                :size="$vuetify.display.lgAndUp ? 'x-large' : 'large'"
                @click="toggleActiveTags"
                v-for="tag in tags"
                :key="tag">
          {{ tag }}
        </v-chip>
      </div>
    </div>
    <div class="container">
      <v-card class="card d-flex flex-column flex-lg-row align-stretch mb-10 mb-lg-12"
              v-for="({ id, imageLabel, title, mins, withCapitan, schedule, capacity, wayStars, wayInfo, excursionStars, excursionInfo, driverLicanse, price, link }) in activeCards"
              :key="title">
        <div class="card__image">
          <div class="card__image-label-helper" />
          <div class="card__image-label py-2 px-3 text-center text-white" :style="{ backgroundColor: imageLabel.color || '#00c853' }">{{ imageLabel.text }}</div>
          <img :alt="imageLabel.text" :src="require(`@/assets/cards/card-${ id }.jpg`)">
        </div>
        <div class="card__info pl-lg-5">
          <v-card-title class="text-h6 text-lg-h5 font-weight-bold mb-3 mb-lg-5">{{ title }}</v-card-title>
          <div class="card__info-content">
            <v-card-subtitle class="text-h7 text-lg-h6 font-weight-bold">
              <v-icon size="30px" class="mr-3">mdi-clock-time-two-outline</v-icon> <span>от {{ mins }} минут</span>
            </v-card-subtitle>
            <v-card-subtitle class="text-h7 text-lg-h6 font-weight-bold">
              <v-icon color="#00abcc" size="30px" class="mr-3">{{ `mdi-${ withCapitan ? 'account-tie-hat' : 'ship-wheel' }` }}</v-icon> <span>{{ withCapitan ? 'С капитаном' : 'Без капитана' }}</span>
            </v-card-subtitle>
            <v-card-text class="text-body-2 pb-0 pt-2 pt-lg-3">Расписание</v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-2 pt-lg-3">ежедневно с {{ schedule.from }} по {{ schedule.to }}</v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-2 pt-lg-3">Количество пассажиров</v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-2 pt-lg-3">до {{ capacity.people }} человек {{ capacity.weight ? `(max ${ capacity.weight })` : '' }}</v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-2 pt-lg-3">Маршрут</v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-2 pt-lg-3">
              <div v-if="wayInfo">{{ wayInfo }}</div>
              <v-rating length="5"
                        color="amber"
                        density="compact"
                        readonly
                        half-increments
                        v-if="wayStars"
                        :modelValue="wayStars" />
            </v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-3">Экскурсия</v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-3">
              <div v-if="excursionInfo">{{ excursionInfo }}</div>
              <v-rating length="5"
                        color="amber"
                        density="compact"
                        readonly
                        half-increments
                        v-if="excursionStars"
                        :modelValue="excursionStars" />
            </v-card-text>
            <v-card-subtitle class="card__merged-cell text-h6 justify-center justify-lg-start font-weight-bold pt-3" v-if="!withCapitan">
              <v-icon :color="driverLicanse ? '#ff1744' : '#00c853'" size="x-large" class="mr-3">{{ `mdi-${ driverLicanse ? 'exclamation-thick' : 'check-bold' }` }}</v-icon>
              <span class="mb-2"> {{ driverLicanse ? 'Необходимы права ГИМС' : 'Права ГИМС не нужны' }}</span>
            </v-card-subtitle>
            <v-card-text class="card__price align-self-center text-h5 text-lg-h4 font-weight-bold pb-0 pt-3">{{ price }}</v-card-text>
            <v-card-text class="text-body-2 pb-0 pt-3"><v-btn class="text-white" color="#fcb813" :size="$vuetify.display.lgAndUp ? 'x-large' : 'default'"><router-link :to="link">Подробнее</router-link></v-btn></v-card-text>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FilteredCards',
    props: {
      bgImageUrl: String,
      title: String,
      items: Array
    },
    data() {
      return {
        activeTags: []
      };
    },
    computed: {
      tags() {
        return new Set(this.items.map(({ tags }) => tags).flat());
      },
      activeCards() {
        return this.items.filter(({ tags }) => !this.activeTags.length || tags.some(tag => this.activeTags.includes(tag)));
      },
      bgCssProperty() {
        return `url('${this.bgImageUrl}')`
      }
    },
    methods: {
      toggleActiveTags({ target: { textContent: tag } }) {        
        if (this.isActiveTag(tag)) {
          this.activeTags = this.activeTags.filter(activeTag => activeTag !== tag);
        } else {
          this.activeTags = [ ...this.activeTags, tag];
        }
      },
      isActiveTag(tag) {
        return this.activeTags.includes(tag);
      }
    }
}</script>

<style lang="scss" scoped>
  .filtered-cards {
    &__filters {
      background-image: linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5) ), v-bind(bgCssProperty);
      background-position-y: bottom;
      background-size: 100%;
      background-repeat-x: repeat;
    }

    .v-chip {
      background-color: rgba(255, 255, 255, .75);

      &[active="true"] {
        background-color: rgba(252, 211, 19, .75);
      }
    }

    .card {
      &__image {
        flex: 1 0 40%;
        position: relative;
        max-width: 40%;

        @media screen and (max-width: 1264px) {
          & {
            max-width: 100%;
          }
        }

        &-label {
          position: absolute;
          z-index: 2;
          top: 30px;
          left: -7px;
          width: 150px;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;

          &-helper {
            position: absolute;
            z-index: 0;
            left: -7px;
            top: 23px;
            background-color: #224454;
            border-top-left-radius: 7px;
            width: 14px;
            height: 14px;
          }
        }

        img {
          position: relative;
          z-index: 1;
          object-fit: cover;
          max-width: 100%;
          min-height: 100%;
          border-radius: 20px;
          aspect-ratio: 16/9;
        }
      }

      &__info {
        flex: 1 0 60%;
      }

      &__info-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
      }

      &__merged-cell {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    .v-card {
      box-shadow: none;

      &-title, &-subtitle, &-text {
        opacity: 1;
        color: #000000;
      }

      .v-rating {
        height: 20px;
      }
    }
  }
</style>
