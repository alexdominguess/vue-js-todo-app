<template>
  <v-app id="inspire">

    <!-- Navidation Drawer é o menu que abre na lateral -->
    <v-navigation-drawer v-model="drawer" app >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Todo
          </v-list-item-title>
          <v-list-item-subtitle>
            Configuração
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar é a barra Header do app -->
    <v-app-bar
      app
      absolute
      dark
      shrink-on-scroll
      prominent
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <p class="d-flex align-end  justify-center" style="width:100%; height:100%">Tarefas</p>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main é tudo que aparece na pagina principal -->
    <v-main>
      <!-- <router-view/> lê tudo que esta no src router e reinderiza o conteudo do router aqui -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => (
      { drawer: null,
      items: [
          { title: 'Tarefas', icon: 'mdi-format-list-checkbox', route:"/"},
          { title: 'Sobre', icon: 'mdi-information-outline', route:"/sobre" },
        ], }
      
      ),
  }
</script>