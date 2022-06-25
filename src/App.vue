<template>
  <v-app>
    <v-main>
      <v-card
        v-if="logged == true"
        style="border-radius: 0px"
        class="mx-auto overflow-hidden"
        height="100vh"
      >
        <v-app-bar color="primary" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>Web App 1.0</v-toolbar-title>
        </v-app-bar>
        <router-view></router-view>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="primary--text text--accent-4"
            >
              <router-link style="text-decoration: none" to="/">
                <v-list-item @click="drawer = false">
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
              </router-link>
              <router-link style="text-decoration: none" to="/account">
                <v-list-item @click="drawer = false">
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Account</v-list-item-title>
                </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <v-container v-else fill-height fluid>
        <v-row no-gutters justify="center">
          <v-col sm="4">
            <h2 class="primary--text text--accent-4">Login</h2>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="Senha"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col md="6">
                  <v-btn
                    
                    elevation="4"
                    depressed
                    color="primary"
                    v-on:click="logged = true"
                    >Login</v-btn
                  >          
                </v-col>
                <v-col md="6">

                  <v-btn elevation="4" depressed color="primary"
                    >Cadastrar</v-btn
                  >

                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    logged: false,
    valid: true,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
