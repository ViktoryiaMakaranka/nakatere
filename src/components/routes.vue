<template>
  <v-lazy>
    <div class="routes my-5 my-lg-10">
      <div class="routes__image" :style="{ backgroundImage: `url(${ require(`@/assets/routes/${ activeRouteGroup }/${ activeRouteValue }.jpg`) })` }" />
      <div class="routes__content container">
        <div class="routes__content-wrapper">
          <h3 class="text-h4 text-lg-h3 text-center text-lg-left font-weight-bold mb-5 mb-lg-10">Рекомендуемые маршруты</h3>
          <v-tabs class="routes__groups" v-model="activeRouteGroup" fixed-tabs>
            <v-tab class="font-weight-bold"
                   v-for="routeGroup in Object.keys(routes)"
                   :key="routeGroup"
                   :value="routeGroup">{{ routes[routeGroup]?.name }}</v-tab>
          </v-tabs>
          <v-tabs v-model="activeRouteValue" fixed-tabs color="#f9a900">
            <v-tab class="font-weight-bold text-body-1"
                   v-for="item in routes[activeRouteGroup].items"
                   :key="item.value"
                   :value="item.value">{{ item.title }}</v-tab>
          </v-tabs>
          <div class="text-left mb-2 mt-5 my-lg-5 pl-5">
            <v-icon color="#288ed7">mdi-map-marker-distance</v-icon> <span class="text-body-1 text-lg-h5 ml-2 ml-lg-5">Протяженность маршрута ~ {{ activeRoute?.distance }} *</span>
          </div>
          <div class="text-body-2 text-lg-body-1 text-left mb-2 mb-lg-5 pl-lg-5 text-justify">{{ activeRoute?.description }}</div>
          <div class="text-body-2 text-lg-body-1 text-left pl-5">* Зависит от скорости</div>
        </div>
      </div>
    </div>
  </v-lazy>  
</template>

<script>
export default {
    name: 'RoutesComponent',
    data() {
      return {
        routes: {
          withCapitan: {
            name: 'С капитаном',
            items: [{
              value: 1,
              title: '60 мин',
              description: 'Возьмите с собой любимого человека и проведите самостоятельную прогулку за штурвалом катера, выбрав один из рекомендованных маршрутов. Насладитесь катанием  вдоль северных островов дельты Невы – Крестовского, Елагина и Каменного острова. Вы сможете увидеть дворцово-парковые ансамбли на островах, красивые набережные, зелень парков, а выйдя на катере в центр Санкт-Петербурга, вы увидите крейсер «Аврора», Петропавловску крепость, Ростральные колонны на стрелке Васьки, Медного Всадника и многое другое.',
              distance: '20 км'
            }, {
              value: 2,
              title: '120 мин',
              description: 'Интересный маршрут самостоятельной прогулки на катере, управление которым не требует специальных прав, включает в себя всю акваторию Невки и Невы от стрелки Васильевского острова до моста Александра Невского, а также выход в Финский залив. Вы увидите такие достопримечательности как: Газпром-арена, ЦПКиО и его Елагин дворец, Телебашня, крейсер Аврора, самый красивый мост Александра Невского, Смольный собор, Эрмитаж, Исаакиевский собор, дворец Меньшикова, Кунсткамера, Ростральные колонны.',
              distance: '40 км'
            }, {
              value: 3,
              title: '180 мин',
              description: 'Отправившись в невероятное путешествие по акватории Невы и Финскому заливу, а после по рекам и каналам, вы узнаете, почему Санкт-Петербург называют «Северной Венецией» и «Городом на островах». Выбрав данный экскурсионный маршрут, вы увидите весь Санкт-Петербург с воды. Проплывете не только по северной части СПб, но и сможете зайти в каналы центра города, пройти по реке Фонтанке! На этом маршруте вы увидите абсолютно все достопримечательности Санкт-Петербурга.',
              distance: '50 км'
            }]
          },
          withoutCapitan: {
            name: 'Без капитана',
            items: [{
              value: 1,
              title: '90 мин',
              description: 'Выбирайте один из трех часовых маршрутов для знакомства с Санкт-Петербургом и его достопримечательностями. Для уединенного отдыха от высокого темпа города рекомендуем маршрут вдоль остров с выходом в Финский залив, где обогнем Петровский, Крестовский, Елагин и Каменный острова и успеем насладиться видом на Лахта-центр. Второй маршрут подходит для тех, кто хочет осмотреть максимум центральных достопримечательностей. Третий  круговой маршрут сочетает в себе как размеренную прогулку мимо Крестовского и Каменного островов, так прогулку по центральной акватории Невы.',
              distance: '20 км'
            }, {
              value: 2,
              title: '180 мин',
              description: 'При аренде катера на два часа, мы рады предложить для вас 2 маршрута: «Северная Венеция» по каналам города или «Парадная Нева и Финский залив», включающий в себя прогулку к Лахта-центру далее вдоль всех островов Петербурга и по центру Невы от Авроры до стрелки Васильевского острова.',
              distance: '40 км'
            }, {
              value: 3,
              title: 'Развод мостов',
              description: 'Арендуя катер для самостоятельного катания на развод мостов, Вы сможете совместить как обзорную прогулку по главным достопримечательностям города, так и просмотр великолепного шоу развода мостов с лучшего ракурса. За 2 часа катания вы успеете пройти вдоль севеных островов, спустится до Авроры, обогнуть Петропавловскую крепость, дойти до Благовещенского моста и выбрать лучшее из предложенных мест, чтобы спокойно насладиться красотой разведения трех мостов.',
              distance: '30 км'
            }]
          }
        },
        activeRouteGroup: 'withCapitan',
        activeRouteValue: 1
      };
    },
    computed: {
      activeRoute() {
        return this.routes[this.activeRouteGroup].items.find(({ value }) => value === this.activeRouteValue);
      }
    },
    watch: {
      activeRouteGroup() {
        this.activeRouteValue = 1;
      }
    }
}</script>

<style lang="scss" scoped>
  @import "@/styles/mixin";


  .routes {
    @include layout(60, '', right, contain);

    &__groups {
      .v-slide-group-item--active {
        color: #ffffff;
        background: #f9a900;
      }
    }

    .v-list-item--active {
      background-color: rgba(249, 219, 57, .6);
    }
  }
</style>
