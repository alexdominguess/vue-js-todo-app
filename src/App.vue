<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <MainMenu/>
    </v-navigation-drawer>

    <v-app-bar app >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Tarefas</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/><!-- htis tag is responsible to make all the views in router to show in main screen -->
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
  export default {
  components: { MainMenu },
    data: () => ({ drawer: null }),
  }
</script>

<style>
 header{
   background-color: rgb(192, 192, 192);
 }

</style>