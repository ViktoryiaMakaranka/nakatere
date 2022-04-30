<template>
  <v-lazy>
    <div class="hamburger-menu">
      <v-menu bottom offset-y right absolute origin="right">
        <template v-slot:activator="{ props, on }">
          <v-btn icon
                 v-bind="props"
                 color="transparent"
                 v-on="on">
            <v-icon :size="$vuetify.display.lgAndUp ? 'x-large' : 'large'">mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="({ title }, index) in items"
                       :key="index">
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-lazy>
</template>

<script>export default {
    name: 'HamburgerMenu',
    data() {
      return {
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' }
        ]
      }
    }
}</script>

<style lang="scss" scoped>
  .hamburger-menu {
    .v-btn{
      box-shadow: none;
    }
  }
</style>
