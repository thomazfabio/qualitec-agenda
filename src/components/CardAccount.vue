<template>
  <v-container>
    <v-card
      style="margin: 0 auto; margin-top: 15px"
      :width="width"
      elevation="6"
      :loading="loading"
      class="pb-10"
    >
      <v-card-title>Informações da conta</v-card-title>
      <v-divider></v-divider>
      <v-container class="d-flex" style="background: #f5f5f5"
        ><v-avatar color="primary" size="105">
          <img src="https://avatars.githubusercontent.com/thomazfabio" alt="" />
        </v-avatar>
        <div>
          <v-card-text class="pa-0 ml-6 mt-2"> ID: {{ userId }} </v-card-text>
          <v-btn class="ml-6 mt-10" small color="primary" dark>
            Editar Avatar
          </v-btn>
        </div>
      </v-container>
      <v-divider></v-divider>
      <!--inicio codigo da tabela-->
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <th class="text-left" width="10%">Nome:</th>
              <td class="text-left">{{ userName }}</td>
              <td class="text-left">
                <v-btn tile small color="primary">
                  <v-icon left> mdi-pencil </v-icon>
                  Editar
                </v-btn>
              </td>
            </tr>

            <tr>
              <th class="text-left">Email:</th>
              <td class="text-left">{{ userEmail }}</td>
              <td class="text-left">
                <v-btn tile small color="primary">
                  <v-icon left> mdi-pencil </v-icon>
                  Editar
                </v-btn>
              </td>
            </tr>

            <tr>
              <th class="text-left">Telefone:</th>
              <td class="text-left">+556696112740</td>
              <td class="text-left">
                <v-btn tile small color="primary">
                  <v-icon left> mdi-pencil </v-icon>
                  Editar
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <!--fim codigo da tabela-->
      <v-divider></v-divider>
      <v-row>
        <v-btn class="ml-6 mt-10" small color="red" dark @click="deletar()"
          >Deletar conta</v-btn
        >
      </v-row>
    </v-card>
    <!--Componente avançado ESDUDAR BEM-->
    <ModalAlert
   v-if="deleteAlert">
      <template v-slot:title> Tem certeza ? </template>

      <template v-slot:text>
        Apos deletar sua conta você será redirecinado para o inicio e não terá
        mais acesso a nenhuma de suas insformaçoes cadastradas aqui, você
        concorda?
      </template>

      <template v-slot:btn1>
        <v-btn outlined color="error" text @click="deleteAccount()"
          >Confirmar</v-btn
        >
      </template>

      <template v-slot:btn2>
        <v-btn outlined color="success" text @click="fechaModal()"
          >Cancelar</v-btn
        >
      </template>
    </ModalAlert
  >
    <!--Componente avançado ESDUDAR BEM-->
  </v-container>
</template>


<script>
import { mapState } from "vuex";
import ModalAlert from "../components/ModalAlert.vue";
export default {
  components: {
    ModalAlert
  ,
  },
  name: "cardAccount",
  data: () => ({
    loading: false,
    deleteAlert: false,  
  }),
  methods: {
    fechaModal: function () {
      this.deleteAlert = false;
    },
    deletar: function () {
      this.deleteAlert = true;
    },
    deleteAccount: function () {
      console.log("oiiiiteste");
      this.fechaModal()
    },
  },

  computed: {
    ...mapState({
      userId: (state) => {
        
        return state.currentUser.uid
      },
      userEmail: (state) => {
        return state.currentUser.email;
      },
      userName: (state) => {
        return state.currentUser.displayName;
      },
    }),

    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "95vw";
        case "sm":
          return "70vw";
        case "md":
          return "60vw";
        case "lg":
          return "55vw";
        case "xl":
          return "50vw";
      }
    },
  },
};
</script>