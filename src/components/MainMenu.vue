<template>
  <div>
      <!-- Main Menu -->
      <v-list dense>
            <v-subheader class="title text-center pl-7">Menu</v-subheader>

            <v-list-item-group  color="primary">
                <v-list-item>
                    <router-link to="/" style="text-decoration: none; color: rgb(71, 71, 71); width:100%">
                        <v-list-item-icon>
                            <v-icon>mdi-checkbox-marked-circle-plus-outline</v-icon>
                        </v-list-item-icon>
                        Tarefa
                    </router-link>
                </v-list-item>

                <v-list-item>
                    <router-link to="/about" style="text-decoration: none; color: rgb(71, 71, 71); width:100%">
                        <v-list-item-icon>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-list-item-icon>
                        Sobre o App
                    </router-link>
                </v-list-item>

                <v-list-item>
                    <a href="https://alexdominguess.github.io/" target="blank" style="text-decoration: none; color: rgb(71, 71, 71); width:100%">
                        <v-list-item-icon>
                            <v-icon>mdi-account-circle-outline</v-icon>
                        </v-list-item-icon>
                        Sobre mim
                    </a>
                </v-list-item>

            </v-list-item-group>
        </v-list>

  </div>
</template>

<script>
export default {

}
</script>

<style>
    .v-list-item{
        padding: 0;
    }
    .v-icon{
        margin: 10px;
    }
</style>