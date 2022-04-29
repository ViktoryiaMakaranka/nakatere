<template>
  <div class="info-lines my-10">
    <div class="container align-center">
      <h3 class="text-h3 font-weight-bold mb-15">{{ title }}</h3>
    </div>
    <div class="info-lines__first pb-5" v-if="!!itemsRight?.length">
      <div class="info-lines__first__image"></div>
      <div class="info-lines__first__content container">
        <div class="info-lines__first__content-wrapper pl-5">
          <template v-for="({ title, description}, index) in itemsRight" :key="title">
            <div class="mb-5 text-h5 font-weight-bold">{{ title }}</div>
            <div :class="`${ index === itemsRight.length - 1 ? '' : 'mb-10'} text-body-1`">{{ description }}</div>
          </template>
        </div>
      </div>
    </div>
    <div class="info-lines__second mt-15" v-if="!!itemsLeft?.length">
      <div class="info-lines__second__image"></div>
      <div class="info-lines__second__content container">
        <div class="info-lines__second__content-wrapper pl-5">
          <template v-for="({ title, description},  index) in itemsLeft" :key="title">
            <div class="mb-5 text-h5 font-weight-bold">{{ title }}</div>
            <div :class="`${ index === itemsLeft.length - 1 ? '' : 'mb-10'} text-body-1`">{{ description }}</div>
          </template>
        </div>
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
      @include layout(60, '@/assets/info/1.png', right);
    }
    
    &__second {
      @include layout(60, '@/assets/info/2.png');
    }
  }
</style>
