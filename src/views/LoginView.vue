<template>
  <v-row no-gutters justify="center">
    <v-col sm="4">
      <h1 class="primary--text text--accent-4 d-flex">Login</h1>
      <span>{{ notificationUser }}</span>
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
              v-model="password"
              :rules="nameRules"
              label="Senha"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col>
            <v-btn
              large
              @click="login()"
              block
              elevation="4"
              depressed
              color="primary"
              v-on:click="logged = true"
              >Login</v-btn
            >
          </v-col>
        </v-row>
        <p class="d-flex justify-center" style="margin: 0">ou</p>
        <v-row>
          <v-col>
            <router-link style="text-decoration: none" to="register">
              <v-btn
                large
                block
                elevation="4"
                depressed
                color="blue-grey darken-3"
                style="color: white"
                >Cadastrar</v-btn
              ></router-link
            >
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    notificationUser: "",
    valid: true,
    password: "",
    email: "",
    nameRules: [
      (v) => !!v || "Password é requerido",
      (v) => v.length >= 6 || "Passwords não pode ter menos de 6 caracteres",
    ],
    emailRules: [
      (v) => !!v || "E-mail é requerido",
      (v) => /.+@.+/.test(v) || "E-mail está inválido",
    ],
  }),
  methods: {
    async login() {
      const { email, password } = this;
      localStorage.AuthPersistence = true
      this.$firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          this.$store.dispatch("currentUser", user);
          this.$router.replace({ name: "home" });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          this.notificationUser = errorMessage;
          console.log(errorMessage);
        });
    },
  },
};
</script>