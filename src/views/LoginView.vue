<template>
  <v-row no-gutters justify="center">
    <v-col sm="4">
      <p class="primary--text text--accent-4 d-flex display-1"
        >Login</p
      >
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
              :rules="passRules"
              :append-icon="showEyePass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showEyePass ? 'text' : 'password'"
              label="Senha"
              required
              @click:append="showEyePass = !showEyePass"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-checkbox
            v-model="persist"
            :label="`Manter conectado`"
          ></v-checkbox>
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
    persist: false,
    showEyePass: false,
    notificationUser: "",
    valid: true,
    password: "",
    email: "",
    nameRules: [
      (v) => !!v || "Password é requerido",
      (v) => v.length >= 6 || "Passwords não pode ter menos de 6 caracteres",
    ],
    passRules: [(v) => !!v || "Password é obrigatório"],
    emailRules: [
      (v) => !!v || "E-mail é requerido",
      (v) => /.+@.+/.test(v) || "E-mail está inválido",
    ],
  }),
  methods: {
    async login() {
      const { email, password } = this;
      localStorage.AuthPersistence = this.persist;
      await this.$firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
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