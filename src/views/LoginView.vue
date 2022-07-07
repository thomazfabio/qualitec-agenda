<template>
  <v-row no-gutters justify="center">
    <v-col sm="4">
      <h2 class="primary--text text--accent-4 d-flex justify-center">Login</h2>
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
              <v-btn block elevation="4" depressed color="primary"
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
    valid: true,
    firstname: "",
    lastname: "",
    password: "",
    nameRules: [
      (v) => !!v || "Password é requerido",
      (v) => v.length >= 6 || "Passwords não pode ter menos de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é requerido",
      (v) => /.+@.+/.test(v) || "E-mail está inválido",
    ],
  }),
  methods: {
    login() {
      const { email, password } = this;

      this.$firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          this.$store.dispatch("logarUser", user);
          console.log(this.$store.state.user);
          this.$router.replace({ name: "home" });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    },
  },
};
</script>