<template>
  <v-app>
    <v-main>
      <v-card
        style="border-radius: 0px"
        class="mx-auto overflow-hidden"
        height="100vh"
      >
        <v-app-bar color="deep-purple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>App Fabio</v-toolbar-title>
        </v-app-bar>
        <router-view></router-view>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item @click="drawer = false">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
