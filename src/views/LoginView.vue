<template>
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
                <v-col>
                  <v-btn
                    block
                    elevation="4"
                    depressed
                    color="primary"
                    v-on:click="logged = true"
                    >Login</v-btn
                  >
                </v-col>
              </v-row>
              <v-container fluid><v-text class="d-flex justify-center">ou</v-text></v-container>

              <v-row>
                <v-col>
                  <v-btn block elevation="4" depressed color="primary"
                    >Cadastrar</v-btn
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
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    })
}
</script>