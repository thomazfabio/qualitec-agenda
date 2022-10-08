<template>
  <v-container fluid>
    <v-card width="70vw" elevation="8" outlined>
      <v-card-title class="pa-2">Informações da conta</v-card-title>
      <v-divider></v-divider>
      <v-container class="pa-2">
        <v-avatar tile size="100">
          <img
            src="https://avatars.githubusercontent.com/thomazfabio"
            alt="John"
          />
        </v-avatar>
      </v-container>

      <v-card-text class="pa-2">Id de usuário: {{ userId }}</v-card-text>
      <v-card-text class="pa-2">Email: {{ userEmail }}</v-card-text>
      <v-card-text class="pa-2">Nome: {{ userName }}</v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pa-2"
        ><v-btn class="green white--text">Atualizar dados</v-btn>
        <v-btn class="red white--text">Deletar conta</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({}),

  computed: {
    ...mapState({
      userId: (state) => {
        return state.currentUser.uid + "";
      },
      userEmail: (state) => {
        return state.currentUser.email + "";
      },
      userName: (state) => {
        return state.currentUser.displayName + "";
      },
    }),
  },
};
</script>