<template>
  <v-container
    fluid
    class="grey lighten-4 elevation-5 pb-8"
    style="border-radius: 6px"
  >
    <v-row>
      <v-col>
        <h1 class="d-flex justify-center" style="color: #607d8b">Cadastrar</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p
          class="d-flex justify-center font-weight-bold"
          style="font-size: small; color: #607d8b"
        >
          Preencha os campos abaixo para criar sua conta
        </p>
      </v-col>
    </v-row>

    <v-form v-model="valid">
      <v-row dense>
        <v-col>
          <v-text-field
            label="Nome"
            placeholder="Seu primeiro nome"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            label="Sobrenome"
            placeholder="Seu sobrenome"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            label="E-mail"
            placeholder="Seu e-mail"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            label="Senha"
            placeholder="Sua senha"
            outlined
            dense
            :append-icon="showEyePass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showEyePass ? 'text' : 'password'"
            @click:append="showEyePass = !showEyePass"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            outlined
            dense
            :append-icon="showEyePass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showEyePass ? 'text' : 'password'"
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

      <v-row align-content="center"  justify="center">
          <p class="pr-2" style="margin: 0; font-size: small;">
            Já tem uma conta? 
          </p>
          <router-link style="text-decoration: none" to="login">
            <p class="" style="margin: 0; color: primary; font-size: small;">
              Entrar
            </p>
          </router-link>
      </v-row>
      <v-row align-content="center"  justify="center">
        <p class="pr-2" style="margin: 0; font-size: small;">ou</p>
      </v-row>
      <v-row align-content="center"  justify="center">
          <p class="pr-2" style="margin: 0; font-size: small;">
            Vá para a página inicial
          </p>
          <router-link style="text-decoration: none" to="home">
            <p class="" style="margin: 0; color: primary; font-size: small;">
              Home
            </p>
          </router-link>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { updateProfile } from "@firebase/auth";

export default {
  name: "formNewUser",
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
    passRules: [(v) => !!v || "Password é obrigatório"],
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
          var userId = userCredential.user.uid;
          console.log(userCredential);

          //update dados user recen criado
          userCredential.user
            .updateProfile({
              displayName: firstname + "." + lastname,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
            .then((sucess) => {
              console.log("sucess");
            })
            .catch((error) => {
              console.log(error);
            });
          // Guardar dados de perfil
          this.$firebase
            .database()
            .ref("users/" + userId)
            .set({
              id: userId,
              firstname: firstname,
              lastname: lastname,
              email: email,
            })
            .then(() => {
              this.$router.replace({ name: "home" });
            })
            .catch((error) => {
              console.log(error);
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
