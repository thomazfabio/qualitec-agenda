<template>
  <v-row no-gutters justify="center">
    <v-col sm="4">
      <h2 class="primary--text text--accent-4">Registro de novo usuário</h2>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Nome"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="lastname"
              :rules="lastNameRules"
              label="Sobrenome"
              required
            ></v-text-field>
          </v-col>

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
        <v-row>
          <v-col>
            <router-link style="text-decoration: none" to="register">
              <v-btn
                large
                block
                elevation="4"
                depressed
                style="color: white"
                color="blue-grey darken-3"
                @click="register()"
                >Cadastrar</v-btn
              ></router-link
            >
          </v-col>
        </v-row>
        <p class="d-flex justify-center" style="margin: 0">ou</p>
        <v-row>
          <v-col>
            <router-link style="text-decoration: none" to="login">
              <v-btn
                large
                style="color: white"
                block
                elevation="4"
                depressed
                color="red lighten-1"
                >Cancelar</v-btn
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
  data: () => ({
    showEyePass: false,
    valid: false,
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    nameRules: [
      (v) => !!v || "Nome é obrigatório",
      (v) => v.length <= 10 || "O nome deve ter menos de 10 caracteres",
    ],
    lastNameRules: [
      (v) => !!v || "Sobrenome é obrigatório",
      (v) => v.length <= 10 || "O sobrenome deve ter menos de 10 caracteres",
    ],
    passRules: [
      (v) => !!v || "Password é obrigatório",
      (v) => /.+@.+/.test(v) || "Password com formato inválido",
    ],
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+/.test(v) || "E-mail deve ser válido",
    ],
  }),
  methods: {
    async register() {
      const { firstname, lastname, password, email } = this;
      this.$firebase
        .auth()
        .createUserWithEmailAndPassword(email, password, firstname, lastname)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          var userId = userCredential.user.uid;
          console.log(userId);
          // Guardar dados de perfil
          this.$firebase
            .database()
            .ref("users/" + userId)
            .set({
              id: userId,
              firstname: firstname,
              email: email,
            })
            .then(() => {
              this.$store.dispatch("logarUser", user);
              this.$router.replace({ name: "home" });
            });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    },
  },
};
</script>