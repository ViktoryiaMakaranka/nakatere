<template>
  <div class="info-lines my-5 my-lg-10">
    <div class="align-center">
      <h3 class="text-h4 text-lg-h3 text-center text-lg-left font-weight-bold mb-5 mb-lg-15">{{ title }}</h3>
    </div>
    <div class="info-lines__first pb-lg-5" v-if="!!itemsRight?.length">
      <div class="info-lines__first__image" />
      <div class="info-lines__first__content">
        <template v-for="({ title, description}, index) in itemsRight" :key="title">
          <div class="mb-2 text-h6 mb-lg-5 text-lg-h5 font-weight-bold">{{ title }}</div>
          <div :class="`${ index === itemsRight.length - 1 ? '' : $vuetify.display.lgAndUp ? 'mb-10' : 'mb-5' } text-body-2 text-lg-body-1`">{{ description }}</div>
        </template>
      </div>
    </div>
    <div class="info-lines__second mt-lg-15" v-if="!!itemsLeft?.length">
      <div class="info-lines__second__image" />
      <div class="info-lines__second__content text-lg-right">
        <template v-for="({ title, description},  index) in itemsLeft" :key="title">
          <div class="mb-2 text-h6 mb-lg-5 text-lg-h5 font-weight-bold">{{ title }}</div>
          <div :class="`${ index === itemsLeft.length - 1 ? '' : $vuetify.display.lgAndUp ? 'mb-10' : 'mb-5' } text-body-2 text-lg-body-1`">{{ description }}</div>
        </template>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
    name: 'InfoLines',
    props: {
      title: String,
      itemsRight: Array,
      itemsLeft: Array
    }
}</script>

<style lang="scss" scoped>
  @import "@/styles/mixin";

  .info-lines {
    &__first {
      @include layout(40%, '@/assets/info/1.png');
    }

    &__second {
      @include layout(40%, '@/assets/info/2.png', -reverse);
    }
  }
</style>
